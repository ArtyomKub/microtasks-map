import React, {FC} from 'react';

type StudentsPropsType = {
    students: Array<StudentsType>
}

type StudentsType = {
    id: number
    name: string
    age: number
}

export const NewComponent: FC<StudentsPropsType> = (props) => {
    return (
        <div>
            {props.students.map(()=>{})}
        </div>
    );
};

