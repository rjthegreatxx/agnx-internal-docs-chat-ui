export interface Message {
  role: "user" | "assistant";
  content: string;
}

export interface RagSource {
  id: string;
  name: string;
}
