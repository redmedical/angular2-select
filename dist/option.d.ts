export declare class Option {
    value: string;
    label: string;
    labelMenu: string;
    disabled: boolean;
    highlighted: boolean;
    selected: boolean;
    shown: boolean;
    constructor(value: string, label: string, labelMenu?: string);
    show(): void;
    hide(): void;
    disable(): void;
    enable(): void;
    undecoratedCopy(): {
        label: string;
        value: string;
    };
}
