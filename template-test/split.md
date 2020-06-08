Answer to Barguast on https://stackoverflow.com/questions/28767221/flexbox-resizing/59407522#59407522

Wow. I am impressed how you resize the flexbox elements with vanilla javascript using 'flexGrow', excelent idea and code.

I tried to solve 'the problem' that you do not describe completely :

"it only handles items sized with flex-grow. If flex-shrink or flex-basis is defined, then the calculations simply don't work."

What I did?

1.- I simplified the HTML:

  1.1- Do not use a <flex> element inside a <flex-item>.

  1.2- Use a <flex> or <flex-item> element, always!, inside another <flex> element.

2.- Solved!
  Splitter's jump when the visible flex-item size is smaller that its content size.

3.- I'd added different cursors to signal a state's change (setupResizerEvents, onMouseUp) to improve usability.

4.- I've added code to prevent the cursor from 'flickering' when dragging.