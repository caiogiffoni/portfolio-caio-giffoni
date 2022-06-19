import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea as ChakraTextarea,
  InputGroup,
  TextareaProps as ChakraTextareaProps,
} from "@chakra-ui/react";
import {
  useEffect,
  useState,
  useCallback,
  useRef,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";
import { FieldError } from "react-hook-form";

interface TextareaProps extends ChakraTextareaProps {
  name: string;
  label?: string;
  error?: FieldError | null;
}

type textareaVariationOptions = {
  [key: string]: string;
};

const inputVariation: textareaVariationOptions = {
  error: "red.500",
  default: "gray.200",
  focus: "gray.800",
  filled: "green.500",
};

const TextareaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextareaProps
> = ({ name, error = null, label, ...rest }, ref) => {
  const [value, setValue] = useState("");
  const [variation, setVariation] = useState("default");

  useEffect(() => {
    if (error) setVariation("error");
  }, [error]);

  const handleTextareaFocus = useCallback(() => {
    if (!error) setVariation("focus");
  }, [error]);

  const handleTextareaBlur = useCallback(() => {
    if (value.length > 1 && !error) setVariation("filled");
  }, [error, value]);

  return (
    <FormControl isInvalid={!!error}>
      {label && <FormLabel color={"gray.400"}>{label}</FormLabel>}
      <ChakraTextarea
        name={name}
        color={inputVariation[variation]}
        borderColor={inputVariation[variation]}
        onFocus={handleTextareaFocus}
        onBlurCapture={handleTextareaBlur}
        bgColor="gray.50"
        variant="outline"
        onChangeCapture={(e) => setValue(e.currentTarget.value)}
        _hover={{ bgColor: "gray.10" }}
        _placeholder={{ color: "gray.300" }}
        size="lg"
        h="100px"
        ref={ref}
        {...rest}
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const TextareaForm = forwardRef(TextareaBase);