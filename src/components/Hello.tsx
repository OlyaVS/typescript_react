import * as React from "react";

// describes the shape of props.
export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => {
    return (
        <h1>Hello from {props.compiler} and {props.framework}!</h1>
    );
};
