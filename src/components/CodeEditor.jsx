import { useRef, useState } from "react";
import { Box, HStack, IconButton, Tooltip } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { FiCopy } from "react-icons/fi";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [tooltipLabel, setTooltipLabel] = useState("Copy Code");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  const handleCopy = () => {
    const code = editorRef.current.getValue();
    navigator.clipboard.writeText(code).then(() => {
      setTooltipLabel("Copied!"); 
      setTimeout(() => setTooltipLabel("Copy Code"), 2000);
    }).catch((err) => {
      console.error("Failed to copy: ", err);
    });
  };

  return (
    <Box>
      <HStack spacing={4}>
        <Box w="50%">
          <HStack justifyContent="space-between">
            <LanguageSelector language={language} onSelect={onSelect} />
            <Tooltip label={tooltipLabel} aria-label="Copy Code">
              <IconButton
                icon={<FiCopy />}
                onClick={handleCopy}
                aria-label="Copy code"
                variant="outline"
              />
            </Tooltip>
          </HStack>
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="75vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </Box>
        <Output editorRef={editorRef} language={language} />
      </HStack>
    </Box>
  );
};

export default CodeEditor;
