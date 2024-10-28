import { MAX_TEXT_LINE_SIZE } from "../components/const/text";

export const truncateText = (text: string): string => {
    if (text.length <= MAX_TEXT_LINE_SIZE) {
        return text;
    }

    const truncatedText = [];
    for (let i = 0; i < text.length; i += MAX_TEXT_LINE_SIZE) {
        truncatedText.push(text.slice(i, i + MAX_TEXT_LINE_SIZE));
    }

    return truncatedText.join("\n");
};