export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
  ruby: "3.0.1",
  go: "1.16.2",
  swift: "5.3.3",  
  kotlin: "1.8.20",  
  rust: "1.68.2",  
  dart: "2.19.6"
};

export const CODE_SNIPPETS = {
  javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Javascript");\n`,
  typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Typescript" });\n`,
  python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Python")\n`,
  java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
  csharp: 'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n',
  php: "<?php\n\n$name = 'PHP';\necho $name;\n",
  ruby: `\ndef greet(name)\n\tputs "Hello, #{name}!"\nend\n\ngreet("Ruby")\n`,
  go: `\npackage main\n\nimport "fmt"\n\nfunc greet(name string) {\n\tfmt.Println("Hello,", name + "!")\n}\n\nfunc main() {\n\tgreet("G0")\n}\n`,
  swift: `\nfunc greet(name: String) {\n\tprint("Hello, \\(name)!")\n}\n\ngreet(name: "Swift")\n`,
  kotlin: `\nfun greet(name: String) {\n\tprintln("Hello, $name!")\n}\n\nfun main() {\n\tgreet("Kotlin")\n}\n`,
  rust: `\nfn greet(name: &str) {\n\tprintln!("Hello, {}!", name);\n}\n\nfn main() {\n\tgreet("Rust");\n}\n`,
  dart: `\nvoid greet(String name) {\n\tprint('Hello, \$name!');\n}\n\nvoid main() {\n\tgreet('Dart');\n}\n`,
};
