import { ParagraphNode, EditorConfig } from "lexical";

export class CustomParagraphNode extends ParagraphNode {
  static getType() {
    return "custom-paragraph";
  }

  static clone(node: CustomParagraphNode) {
    return new CustomParagraphNode(node.__key);
  }

  createDOM(config: EditorConfig) {
    let dom: any = super.createDOM(config);
    dom.style = "background: green";
    return dom;
  }
}
