import React, {FC} from 'react';

type NewComponentType = {
    students: Array<StudentType>
}

type StudentType = {
    id: number
    name: string
    age: number
}

export const NewComponent: FC<NewComponentType> = (props) => {
    return (
        <div>
            {props.students.map((students) => {
                return (
                    <li key={students.id}>{students.name}, {students.age}</li>
                )
            })}
        </div>
    );
};

