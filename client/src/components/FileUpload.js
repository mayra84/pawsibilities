import { Input, FormControl, FormLabel, InputGroup, InputLeftElement, FormErrorMessage, Code, Icon } from "@chakra-ui/react";
import { FiFile } from "react-icons/fi";
import { useRef } from "react";

//destructuring props inline 
const FileUpload = ({ name, placeholder, acceptedFileTypes, onChange, children, value, invalid }) => {
    const inputRef = useRef();

    return (
        <FormControl isInvalid={invalid} isRequired>
            <FormLabel htmlFor="writeUpFile">{children}</FormLabel>
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<Icon as={FiFile} />}
                />
                <input type='file' accept={acceptedFileTypes} onChange={onChange} name={name} ref={inputRef} inputRef={inputRef} style={{ display: 'none' }}></input>
                <Input
                    placeholder={placeholder || "Your file ..."}
                    onClick={() => inputRef.current.click()}
                    value={value[0]?.name}
                />
            </InputGroup>
            <FormErrorMessage>
                {invalid}
            </FormErrorMessage>
        </FormControl>
    );
}

export default FileUpload;
