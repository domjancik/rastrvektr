var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList

const setupGrammar =
/**
 * 
 * @param {{grammar: string, lang: string}} param0 
 */
({grammar, lang}) =>
/**
 * 
 * @param {SpeechRecognition} recognition 
 */
recognition => {
    const speechGrammarList = new SpeechGrammarList();
    speechGrammarList.addFromString(grammar);

    recognition.grammars = speechGrammarList;
    if (lang) recognition.lang = lang;

    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
}

export { setupGrammar };