function insertStrAtSpecificIndexInTextareaElem(textareaElement: HTMLTextAreaElement | null, emoji: string) {
  if(textareaElement) {
    let cursor = textareaElement.selectionStart;
    // textareaElement.value =
    //   textareaElement.value.slice(0, cursor) + emoji + textareaElement.value.slice(cursor);

    document.execCommand("insertText", false, emoji);

    cursor += emoji.length;
    textareaElement?.focus();
    textareaElement?.setSelectionRange(cursor, cursor);
  }

}

export function handleInsertEmoji(): void {
  const caretPositionContentElement= document.getElementById('caretPositionContent') as HTMLElement | null
  const textareaFieldElement = document.getElementById('textareaField') as HTMLTextAreaElement | null

  if(caretPositionContentElement && textareaFieldElement) {
    caretPositionContentElement.innerHTML = String(textareaFieldElement.selectionStart);
  }

  insertStrAtSpecificIndexInTextareaElem(textareaFieldElement, "🚀");
};
