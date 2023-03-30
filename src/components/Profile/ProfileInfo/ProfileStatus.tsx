import React from "react";

export type ProfileStatusPropsType = {
  status: string;
};

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
  state = {
    editMode: false,
  };

  activeEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  inactiveEditMode = () => {
    this.setState({
      editMode: false,
    });
  };

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activeEditMode}>{this.props.status}</span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <div>
              <input
                onBlur={this.inactiveEditMode}
                value={this.props.status}
                autoFocus
              ></input>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default ProfileStatus;
