import { useEffect, useState } from "react";
import { createHighlighter, type Highlighter } from "shiki";

const codeSnippet = `const aiPipeline = async (query: string) => {
  const embeddings = await generateEmbeddings(query);
  const context = await vectorStore.similaritySearch(embeddings);
  return langchain.invoke({ context, query });
}`;

const CodeHighlight = () => {
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let highlighter: Highlighter | null = null;

    const loadHighlighter = async () => {
      try {
        highlighter = await createHighlighter({
          themes: ["github-dark"],
          langs: ["typescript"],
        });

        const html = highlighter.codeToHtml(codeSnippet, {
          lang: "typescript",
          theme: "github-dark",
        });

        setHighlightedCode(html);
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading highlighter:", error);
        setIsLoading(false);
      }
    };

    loadHighlighter();

    return () => {
      highlighter = null;
    };
  }, []);

  if (isLoading) {
    return (
      <div className="p-6 font-mono text-sm">
        <div className="space-y-1">
          <div>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-cyan-400">aiPipeline</span>
            <span className="text-foreground"> = </span>
            <span className="text-purple-400">async</span>
            <span className="text-foreground"> (</span>
            <span className="text-cyan-400">query</span>
            <span className="text-foreground">: </span>
            <span className="text-yellow-400">string</span>
            <span className="text-foreground">) </span>
            <span className="text-purple-400">{"=>"}</span>
            <span className="text-foreground"> {"{"}</span>
          </div>
          <div className="pl-4">
            <span className="text-purple-400">const</span>{" "}
            <span className="text-cyan-400">embeddings</span>
            <span className="text-foreground"> = </span>
            <span className="text-purple-400">await</span>{" "}
            <span className="text-yellow-400">generateEmbeddings</span>
            <span className="text-foreground">(</span>
            <span className="text-cyan-400">query</span>
            <span className="text-foreground">);</span>
          </div>
          <div className="pl-4">
            <span className="text-purple-400">const</span>{" "}
            <span className="text-cyan-400">context</span>
            <span className="text-foreground"> = </span>
            <span className="text-purple-400">await</span>{" "}
            <span className="text-cyan-400">vectorStore</span>
            <span className="text-foreground">.</span>
            <span className="text-yellow-400">similaritySearch</span>
            <span className="text-foreground">(</span>
            <span className="text-cyan-400">embeddings</span>
            <span className="text-foreground">);</span>
          </div>
          <div className="pl-4">
            <span className="text-purple-400">return</span>{" "}
            <span className="text-cyan-400">langchain</span>
            <span className="text-foreground">.</span>
            <span className="text-yellow-400">invoke</span>
            <span className="text-foreground">(</span>
            <span className="text-foreground">{"{"} </span>
            <span className="text-cyan-400">context</span>
            <span className="text-foreground">, </span>
            <span className="text-cyan-400">query</span>
            <span className="text-foreground"> {"}"});</span>
          </div>
          <div>
            <span className="text-foreground">{"}"}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <div
        className="p-4 sm:p-6 font-mono text-xs sm:text-sm [&_pre]:bg-transparent [&_pre]:p-0 [&_pre]:m-0 [&_pre]:overflow-visible [&_pre]:text-foreground [&_code]:text-foreground [&_span]:leading-relaxed [&_pre]:whitespace-pre"
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </div>
  );
};

export default CodeHighlight;

