// TODO add shortcuts

$(document).ready(() => {
    // Hide the original textarea then create a new one with the same content
    var $textAreaOriginal = $('#content')
    $textAreaOriginal.hide()

    // this is the new Div
    var newtextAreaDiv = `
        <div id="bootstrap5mde" class="d-flex flex-column h-100 w-100 shadow-sm">
            <div id="bootstrap5mde-btn-toolbar" class="btn-toolbar p-1 al" role="toolbar">
                <div class="btn-group p-0 m-0" role="group">
                    <button id="bootstrap5mde-btn-bold" type="button p-0 m-0" class="btn px-6px" title="Bold text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-type-bold" viewBox="0 0 16 16">
                            <path d="M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z"/>
                        </svg>
                    </button>
                    <button id="bootstrap5mde-btn-strikethrough" type="button" class="btn px-6px" title="Italic text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-type-strikethrough" viewBox="0 0 16 16">
                            <path d="M6.333 5.686c0 .31.083.581.27.814H5.166a2.8 2.8 0 0 1-.099-.76c0-1.627 1.436-2.768 3.48-2.768 1.969 0 3.39 1.175 3.445 2.85h-1.23c-.11-1.08-.964-1.743-2.25-1.743-1.23 0-2.18.602-2.18 1.607zm2.194 7.478c-2.153 0-3.589-1.107-3.705-2.81h1.23c.144 1.06 1.129 1.703 2.544 1.703 1.34 0 2.31-.705 2.31-1.675 0-.827-.547-1.374-1.914-1.675L8.046 8.5H1v-1h14v1h-3.504c.468.437.675.994.675 1.697 0 1.826-1.436 2.967-3.644 2.967"/>
                        </svg>
                    </button>
                    <button id="bootstrap5mde-btn-italic" type="button" class="btn px-6px" title="Italic text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-type-italic" viewBox="0 0 16 16">
                            <path d="M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z"/>
                        </svg>
                    </button>
                    <button id="bootstrap5mde-btn-underline" type="button" class="btn px-6px" title="Italic text">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-type-underline" viewBox="0 0 16 16">
                            <path d="M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57s-2.687-1.08-2.687-2.57zM12.5 15h-9v-1h9z"/>
                        </svg>
                    </button>
                    
                </div>

                <div class="vr bootstrap5mde-vr mx-2 my-2"></div>
                <div class="btn-group p-0 m-0" role="group">
                    <button id="bootstrap5mde-btn-header-1" type="button" class="btn px-6px" title="# Header 1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-type-h1" viewBox="0 0 16 16">
                            <path d="M7.648 13V3H6.3v4.234H1.348V3H0v10h1.348V8.421H6.3V13zM14 13V3h-1.333l-2.381 1.766V6.12L12.6 4.443h.066V13z"/>
                        </svg>
                    </button>
                    <button id="bootstrap5mde-btn-header-2" type="button" class="btn px-6px" title="## Header 2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-type-h2" viewBox="0 0 16 16">
                            <path d="M7.495 13V3.201H6.174v4.15H1.32V3.2H0V13h1.32V8.513h4.854V13zm3.174-7.071v-.05c0-.934.66-1.752 1.801-1.752 1.005 0 1.76.639 1.76 1.651 0 .898-.582 1.58-1.12 2.19l-3.69 4.2V13h6.331v-1.149h-4.458v-.079L13.9 8.786c.919-1.048 1.666-1.874 1.666-3.101C15.565 4.149 14.35 3 12.499 3 10.46 3 9.384 4.393 9.384 5.879v.05z"/>
                        </svg>
                    </button>
                    <button id="bootstrap5mde-btn-header-3" type="button" class="btn px-6px" title="### Header 3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-type-h3" viewBox="0 0 16 16">
                            <path d="M11.07 8.4h1.049c1.174 0 1.99.69 2.004 1.724s-.802 1.786-2.068 1.779c-1.11-.007-1.905-.605-1.99-1.357h-1.21C8.926 11.91 10.116 13 12.028 13c1.99 0 3.439-1.188 3.404-2.87-.028-1.553-1.287-2.221-2.096-2.313v-.07c.724-.127 1.814-.935 1.772-2.293-.035-1.392-1.21-2.468-3.038-2.454-1.927.007-2.94 1.196-2.981 2.426h1.23c.064-.71.732-1.336 1.744-1.336 1.027 0 1.744.64 1.744 1.568.007.95-.738 1.639-1.744 1.639h-.991V8.4ZM7.495 13V3.201H6.174v4.15H1.32V3.2H0V13h1.32V8.513h4.854V13z"/>
                        </svg>
                    </button>
                </div>

                <div class="vr bootstrap5mde-vr mx-1 my-2"></div>
                <div class="btn-group p-0 m-0" role="group">
                    <button id="bootstrap5mde-btn-bullet-list" type="button" class="btn px-6px" title="Bullet list">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                        </svg>
                    </button>
                    <button id="bootstrap5mde-btn-numbered-list" type="button" class="btn px-6px" title="Numbered list">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ol" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5"/>
                        <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635z"/>
                        </svg>
                    </button>
                </div>

                <div class="vr bootstrap5mde-vr mx-1 my-2"></div>
                <div class="btn-group p-0 m-0" role="group">
                    <button id="bootstrap5mde-btn-link" type="button" class="btn px-6px" title="Link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link" viewBox="0 0 16 16">
                        <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9q-.13 0-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                        <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4 4 0 0 1-.82 1H12a3 3 0 1 0 0-6z"/>
                        </svg>
                    </button>
                    <button id="bootstrap5mde-btn-image-link" type="button" class="btn px-6px" title="Image link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"/>
                        </svg>
                    </button>
                </div>

                <div class="vr bootstrap5mde-vr mx-1 my-2"></div>
                <div class="btn-group p-0 m-0" role="group">
                    <button id="bootstrap5mde-btn-help" type="button" class="btn px-6px" title="Markdown guide">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
                        </svg>
                    </button>
                </div>

            </div>

            <textarea id="bootstrap5mde-raw" class="flex-fill" spellcheck="false"></textarea>
        </div>`

    // copy all styles from the original textarea to the new one
    const styles = window.getComputedStyle($textAreaOriginal[0])
    // concatenate all styles into a string
    let styleString = ''
    for (let i = 0; i < styles.length; i++) {
        styleString += `${styles[i]}: ${styles.getPropertyValue(styles[i])};`
    }
    // apply the styles to the new textarea
    $(newtextAreaDiv).attr('style', styleString)


    // create new dom element
    $textAreaOriginal.after(newtextAreaDiv);

    /** HTML elements **/
    const $textAreaAlt = $('#bootstrap5mde-raw') // textArea containing raw text

    // Bold btn listener
    $('#bootstrap5mde-btn-bold').on('click', () => {
        addTextSurroundingCursor($textAreaAlt, '**') // Surround highlighted text like this: **<text>**
    })

    // strikethrough btn listener
    $('#bootstrap5mde-btn-strikethrough').on('click', () => {
        addTextSurroundingCursor($textAreaAlt, '~~') // Surround highlighted text like this: ~~<text>~~
    })

    // Italic btn listener
    $('#bootstrap5mde-btn-italic').on('click', () => {
        addTextSurroundingCursor($textAreaAlt, '_') // Surround highlighted text like this: _<text>_
    })

    // Underline btn listener
    $('#bootstrap5mde-btn-underline').on('click', () => {
        addTextSurroundingCursor($textAreaAlt, '<u>', '</u>') // Surround highlighted text like this: <u><text></u>
    })

    // H1 btn listener
    $('#bootstrap5mde-btn-header-1').on('click', () => {
        addTextAtCursor($textAreaAlt, '# ', 0, true)
    })

    // H2 btn listener
    $('#bootstrap5mde-btn-header-2').on('click', () => {
        addTextAtCursor($textAreaAlt, '## ', 0, true)
    })

    $('#bootstrap5mde-btn-header-3').on('click', () => {
        addTextAtCursor($textAreaAlt, '### ', 0, true)
    })

    // Bullet-list button listener
    $('#bootstrap5mde-btn-bullet-list').on('click', () => {
        addTextAtCursor($textAreaAlt, '- ', 0, true)
    })

    // Number-list button listener
    $('#bootstrap5mde-btn-numbered-list').on('click', () => {
        addTextAtCursor($textAreaAlt, '1. ', 0, true)
    })

    // Link button listener
    $('#bootstrap5mde-btn-link').on('click', () => {
        addTextAtCursor($textAreaAlt, '[title](http://)', offset = -1)
    })

    // Image-link button listener
    $('#bootstrap5mde-btn-image-link').on('click', () => {
        addTextAtCursor($textAreaAlt, '![](http://)', offset = -1)
    })

    // Add link redirect to help button
    $('#bootstrap5mde-btn-help').on('click', () => {
        window.location.href = 'https://www.markdownguide.org/basic-syntax/'
    })

    // Add shadow on hover to toolbar buttons
    $('#bootstrap5mde-btn-toolbar').find('button[id^="bootstrap5mde-btn-"]').each((index, item) => {
        $(item).hover(() => {
            $(item).addClass('shadow')
            $(item).removeClass('svg-fill').addClass('svg-fill-primary')
        }, () => {
            $(item).removeClass('shadow')
            $(item).removeClass('svg-fill-primary').addClass('svg-fill')
        })
    })

    // Textarea keypress listener
    $textAreaAlt.on('keypress', (event) => {
        var charCode = (typeof event.which == "undefined") ? event.keyCode : event.which // stackoverflow idk
        var key = String.fromCharCode(charCode) // current keypress value

        if (key == '*') { // Shortcut for bolding text
            addTextSurroundingCursor($textAreaAlt, '**')
            return false; // Returning false prevents the key from being inserted into the textarea
        } else if (key == '_') { // Shortcut for italicizing text
            addTextSurroundingCursor($textAreaAlt, '_')
            return false;
        }
        // if enter, check if the current line starts with a bullet point, if it does, add another bullet point
        else if (charCode == 13) {
            var cursorStart = $textAreaAlt.prop('selectionStart')
            var text = $textAreaAlt.val()
            var textBefore = text.substring(0, cursorStart)
            var textAfter = text.substring(cursorStart, text.length)

            // Find the start of the current line
            var lineStart = textBefore.lastIndexOf('\n') + 1
            var currentLine = textBefore.substring(lineStart, cursorStart)

            // regex expression for auto numbering or bulleting
            // 1. 2. and so on or - or *. ignore whitespace before the number
            const regex = /^\s*(\d+\.|\-|\*)/g

            // If the current line starts with a bullet point, add another bullet point
            if (regex.test(currentLine)) {
                // need to count the number of spaces before the bullet point
                let bullet = currentLine.match(/^\s*(\d+\.|\-|\*)/)[0] + " "
                // find the number if it is a numbered list, and increment it
                if (bullet.match(/^\d+\./)) {
                    const num = parseInt(bullet.match(/^\d+/)[0])
                    bullet = (num + 1) + ". "
                }
                textBefore = textBefore.substring(0, cursorStart) + '\n' + bullet + textBefore.substring(cursorStart)
                $textAreaAlt.val(textBefore + textAfter)
                // $textAreaAlt.focus()
                return false
            }
        }
    })

    // Sync the content of the original textarea with the new one
    $textAreaAlt.on('input', () => {
        $textAreaOriginal.val($textAreaAlt.val())
    })

})






/*** UTILITY FUNCTIONS ***/

/**
 * Adds text at the cursor position of a textarea
 * @param {*} textArea An HTML textarea
 * @param {*} text Text String to be inserted
 * @param {*} offset Cursor is by default at the end of the added text. This will move the cursor ahead or behind by a number of chars
 * @param {*} addLineStart If true, the text will be added at the start of the current line
 */
function addTextAtCursor(textArea, text, offset = 0, addLineStart = false) {
    var cursorStart = $(textArea).prop('selectionStart')

    var textAreaText = $(textArea).val()
    var textBefore = textAreaText.substring(0, cursorStart)
    var textAfter = textAreaText.substring(cursorStart, textAreaText.length)

    if (addLineStart) {
        // Find the start of the current line
        var lineStart = textBefore.lastIndexOf('\n') + 1
        // Add the text to the start of the line
        textBefore = textBefore.substring(0, lineStart) + text + textBefore.substring(lineStart)
    } else {
        // Add the text at the cursor position
        textBefore += text
    }

    // Replace text from textarea
    $(textArea).val(textBefore + textAfter)
    $(textArea).focus()

    var $textAreaOriginal = $('#content')
    $textAreaOriginal.val(textBefore + textAfter)

    if (offset != 0) {
        const cursorPosition = textBefore.length + text.length + offset
        $(textArea).prop({
            'selectionStart': cursorPosition,
            'selectionEnd': cursorPosition
        });
    }
}

/**
 * Places a given text on the left and right of a cursor in a textarea
 * @param {*} textArea An HTML textarea
 * @param {*} textLeft Text String to be inserted at left of cursor
 * @param {*} textRight Text String to be inserted at right of cursor, if none is given, textRight is equal to textLeft
 */
function addTextSurroundingCursor(textArea, textLeft, textRight = null) {
    if (textRight == null) {
        textRight = textLeft
    }

    var cursorStart = $(textArea).prop('selectionStart')
    var cursorEnd = $(textArea).prop('selectionEnd')

    var text = $(textArea).val()
    var textBeforeStart = text.substring(0, cursorStart)
    var highlightedText = text.substring(cursorStart, cursorEnd)
    var textAfterEnd = text.substring(cursorEnd, text.length)

    // If highlightedText contains text, trim whitespaces
    if (highlightedText.length > 0) {
        if (highlightedText.endsWith(" ")) {
            // Move the whitespace from highlightedText between textRight and textAfterEnd
            highlightedText = $.trim(highlightedText)
            if (!(textRight.endsWith(' ') || textAfterEnd.startsWith(' '))) {
                textAfterEnd = " " + textAfterEnd
            }
        }
    }

    // Replace text from textarea
    const newVal = `${textBeforeStart}${textLeft}${highlightedText}${textRight}${textAfterEnd}`
    var $textAreaOriginal = $('#content')
    $textAreaOriginal.val(newVal)
    $(textArea).val(newVal)
    $(textArea).focus()

    // If 'highlightedText' is empty, set cursor position in the middle
    if (highlightedText.length == 0 && (textLeft.length == textRight.length)) {
        const cursorPosition = textBeforeStart.length + textLeft.length
        $(textArea).prop({
            'selectionStart': cursorPosition,
            'selectionEnd': cursorPosition
        });
    } else if (highlightedText.length > 0) { // If 'highlightedText' contains text
        const cursorStartPosition = textBeforeStart.length
        const cursorEndPosition = cursorStartPosition + textLeft.length + highlightedText.length + textRight.length
        $(textArea).prop({
            'selectionStart': cursorStartPosition,
            'selectionEnd': cursorEndPosition
        });
    }
}

/**
 * @param {*} textArea An HTML textarea
 * @returns String containing highlighted text if it is highlighted, null if it isn't
 */
function getHighlightedText(textArea) {
    var cursorStart = $(textArea).prop('selectionStart')
    var cursorEnd = $(textArea).prop('selectionEnd')

    if (cursorStart != cursorEnd) { // If there is highlighted text
        var highlightedText = $(textArea).val().substring(cursorStart, cursorEnd)
        return highlightedText
    }

    return null
}