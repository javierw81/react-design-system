export const componentStyleType = (props: any): any => {
    return props.primary ? props.theme.primary :
        props.secondary ? props.theme.secondary :
            props.success ? props.theme.success :
                props.danger ? props.theme.danger :
                    props.warning ? props.theme.warning :
                        props.info ? props.theme.info :
                            props.light ? props.theme.light :
                                props.dark ? props.theme.dark : undefined;
};