var acc = document.getElementsByClassName('accordion')[0];

/**
 * toggle function to show or hide the content
 */
function toggleContent(tab, tabPanel) {

/* useful debug log
	 console.log("in toggleContent, what is tab, tab is "+tab);
	 console.log("in toggleContent, what is tabpanel, tabPanel is "+tabPanel);
	 console.log("tabPanel.getAttribute(aria-hidden) is "+tabPanel.getAttribute('aria-hidden'));
*/

  /**
   * if saria-elected is selected or true 
   * then un-select aria-selected or set it to flase and then
   * reset expanded to false and hidden to true
   */
  if (tab.getAttribute('aria-selected') == "true") {
  	tab.setAttribute('aria-selected', false);
  	tabPanel.setAttribute('aria-expanded', false);
  	tabPanel.setAttribute('aria-hidden', true);
  } else {
  	/**
  	 * else reset the attribute oppostie of the above
  	 */
  	tab.setAttribute('aria-selected', true);
  	tabPanel.setAttribute('aria-expanded', true);
  	tabPanel.setAttribute('aria-hidden', false);
  }
}

function toggleContentPanel(event) {
	/**
	 * get the target panel id
	 */
  var targetPanelId = event.target.parentNode.getAttribute('aria-controls');
  /**
   * get the target panel content
   */
  var targetPanel = acc.querySelector('#' + targetPanelId);

  /**
   * tag names are caps, so test it with 'A' not 'a'
   */
  if (event.target.tagName === 'A') {
  	//console.log("event.target.tagName should be 'A' not 'a', let's see what it is :"+event.target.tagName);
  	/**
  	 * toggle the content using the target event and the target panel 
  	 */
  	toggleContent(event.target.parentNode, targetPanel);
  } 
  //event.preventDefault();
}

/**
 * add event listener for when the accordion hyperlink heading is clicked
 */
acc.addEventListener('click', toggleContentPanel);

/**
 * function to handle when user press keyboard key
 */
function handleKeypress(event) {
	var key = event.keyCode;  /* console.log("key is equal to "+key); */

	var targetParent = event.target.parentNode; /* console.log("targetParent is equal to "+targetParent); */

	var targetPanelId,
	    targetPanel,
	    targetTab;

	if (key === 37 || key === 38) { 	/* if user press the left or up arrow key */

		if (targetParent.previousElementSibling) { /* if there there is a previous element, reset targetTab and get targetPanelId */
			targetTab = targetParent.previousElementSibling.previousElementSibling; /* reset targetTab */
			targetPanelId = targetParent.previousElementSibling.previousElementSibling.getAttribute('aria-controls'); /* get targetPanelId */
		} else { /* there's no previous element, so go up a parent and access the last child and then retrieve the previous to the last child */
			targetTab = targetParent.parentNode.lastElementChild.previousElementSibling; /* reset targetTab */
			targetPanelId = targetParent.parentNode.lastElementChild.previousElementSibling.getAttribute('aria-controls'); /* get targetPanelId */
		}
	} else if (key === 39 || key === 40) { /* if user press the right or down arrow key */
		if (targetParent.nextElementSibling.nextElementSibling) { /* if there os a next sibling */
			targetTab = targetParent.nextElementSibling.nextElementSibling; /* reset the targetTab */
			targetPanelId = targetParent.nextElementSibling.nextElementSibling.getAttribute('aria-controls'); /* get the targetPanelId */
		} else { /* there's no next element, so go up a parent and access the first child, which should be the first heading element */
			targetTab = targetParent.parentNode.firstElementChild;
			targetPanelId = targetParent.parentNode.firstElementChild.getAttribute('aria-controls');
		}
	} else if (key === 32) { /* if user press the space bar */
		targetTab = targetParent;
		targetPanelId = targetParent.getAttribute('aria-controls');
	}

	if (targetTab) {
		targetPanel = acc.querySelector('#' + targetPanelId); /* console.log("targetPanel is equal to "+targetPanel); */
		targetTab.firstElementChild.focus();
		if (key === 32) { /* toggle content only if space bar is pressed */
			toggleContent(targetParent,targetPanel);
		}
	}
	
}

acc.addEventListener("keyup", handleKeypress);