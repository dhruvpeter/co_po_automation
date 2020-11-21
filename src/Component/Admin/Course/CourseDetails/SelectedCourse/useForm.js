import {useState } from "react";

export const useForm = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    return[value, (event) =>{
        setValue({
            ...value,
            [event.target.coursename]: event.target.value,
            [event.target.coursecode]: event.target.value,
            [event.target.semester]: event.target.value,
            [event.target.faculty]: event.target.value,
        });
    },
];
};