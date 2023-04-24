import React, { ChangeEvent } from "react";

export type ProfileStatusPropsType = {
  status: string;
  updateStatus: any;
};

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activeEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deActiveEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ status: e.currentTarget.value });
  };

  componentDidUpdate(
    prevProps: Readonly<ProfileStatusPropsType>,
    prevState: Readonly<{}>,
    snapshot?: any
  ) {
    if (prevProps.status !== this.props.status)
      this.setState({
        status: this.props.status,
      });
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activeEditMode}>
              {this.props.status || "--------"}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <div>
              <input
                onBlur={this.deActiveEditMode}
                value={this.state.status}
                autoFocus
                onChange={this.onStatusChange}
              ></input>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default ProfileStatus;
