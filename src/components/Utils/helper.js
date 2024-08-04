const nameList = [
    "Kitty", "Kitten", "Zero", "Memory", "Trooper", "XX", "Bandit",
    "Fear", "Light", "Glow", "Tread", "Deep", "Deeper", "Deepest",
    "Mine", "Your", "Worst", "Enemy", "Hostile", "Force", "Video",
    "Game", "Donkey", "Mule", "Colt", "Cult", "Cultist", "Magnum",
    "Gun", "Assault", "Recon", "Trap", "Trapper", "Redeem", "Code",
    "Script", "Writer", "Near", "Close", "Open", "Cube", "Circle",
    "Geo", "Genome", "Germ", "Spaz", "Shot", "Echo", "Beta", "Alpha",
    "Gamma", "Omega",
  ];
  
  const chatMessages = [
    "Hi everyone, My name is Himanshu",
    "Hey everyone! How's it going?",
    "I'm so excited for this video!",
    "Wow, this content is amazing!",
    "Himanshu, you're doing a great job!",
    "Can anyone help me with a coding issue himanshu?",
    "Sure, what do you need help with?",
    "I love the way this project is turning out.",
    "Does anyone know when the next stream is?",
    "Great question! I think it's next week.",
    "Thanks for the info! I'll be there.",
    "This chat is so helpful and friendly!",
    "I just learned something new, thanks!",
    "Himanshu, can you share more about this topic?",
    "Absolutely, I'll cover that in the next segment.",
  ];
  
  export function generateRandomName() {
    const randomIndex = Math.floor(Math.random() * nameList.length);
    return nameList[randomIndex];
  }
  
  export function generateRandomCompliment() {
    const randomIndex = Math.floor(Math.random() * chatMessages.length);
    return chatMessages[randomIndex];
  }
  
  export function generateRandomId(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  