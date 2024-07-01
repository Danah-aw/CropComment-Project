const textareaEl = document.querySelector('.form__textarea');
const counterEl = document.querySelector('.counter');

const inputhandler = () => {
    // determine maximum number of characters
    const maxNrChars = 150;

    // determine number of characters currently typed
    const nrCharsTyped = textareaEl.Value.length;

    // calculate number of characters left (maximum minus currently typed)
    const charsLeft = maxNrChars - nrCharsTyped;

    // show number of characters left
    counterEl.textContent = charsLeft;
}

// textareaEl.addEventListener('input', );