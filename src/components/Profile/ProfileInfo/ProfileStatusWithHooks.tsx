import React, {useEffect, useState} from "react";

export type ProfileStatusWithHooksPropsType = {
    status: string;
    updateStatus: (staus: string) => void;
};


const ProfileStatusWithHooks = (props: ProfileStatusWithHooksPropsType) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {

        setStatus(props.status)
    }, [props.status])

    const activeEditMode = () => {
        setEditMode(true)
    }

    const deActiveEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: any) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                 <div onDoubleClick={activeEditMode}>
                     <b>Status: </b><span>{props.status || "--------"} </span>
                </div>
            }
            {
                editMode &&
                <div>

                    <input autoFocus onBlur={deActiveEditMode}
                           onChange={onStatusChange}
                           value={status}/>
                </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks;
