import React, { Component, ErrorInfo, ReactNode } from "react";


export interface Props {
    children?: ReactNode;
}

export interface State {
    hasError: boolean;
}
