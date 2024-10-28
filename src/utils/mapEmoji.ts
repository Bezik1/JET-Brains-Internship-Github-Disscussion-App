export const mapEmoji = (emoji: string): string =>{
    switch(emoji) {
        case "+1": {
            return "👍"
        }
        case "-1": {
            return "👎"
        }
        case "confused": {
            return "😕"
        }
        case "eyes": {
            return "👀"
        }
        case "heart": {
            return "❤️"
        }
        case "hooray": {
            return "🎉"
        }
        case "laugh": {
            return "😄"
        }
        case "rocket":  {
            return "🚀"
        }
        default:
            console.log(emoji)
            throw new Error('Unknown Emoji')
    }
}