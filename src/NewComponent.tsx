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
                    <ul>
                        <li>name: {students.name}</li>
                        <li>age: {students.age}</li>
                        <li>number: {students.id}</li>
                    </ul>
                )
            })}
        </div>
    );
};

