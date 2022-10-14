"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2727],{5549:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return p},default:function(){return d}});var n=a(87462),i=a(63366),r=(a(15007),a(64983)),s=a(91515),o=["components"],p={},m={_frontmatter:p},l=s.Z;function d(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.mdx)(l,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"getting-started-guide"},"Getting started guide"),(0,r.mdx)("p",null,"Get started and create your first Adobe InDesign Script."),(0,r.mdx)("p",null,"In this guide, we will cover the basics of InDesign scripting, and create a simple InDesign script using UXP that creates a new document, adds a text frame, and enters text in the text frame. "),(0,r.mdx)("h2",{id:"uxp-scripting-in-indesign"},"UXP Scripting in InDesign"),(0,r.mdx)("p",null,"UXPScript should be written in JavaScript, and the file should be saved as ",(0,r.mdx)("inlineCode",{parentName:"p"},"<filename>.idjs"),". Saving the script as .idjs enables the UXP engine in InDesign and executes the script as UXPScript.( .jsx will execute as normal ExtendScript)"),(0,r.mdx)("h2",{id:"installing-scripts"},"Installing scripts"),(0,r.mdx)("p",null,"Installing an InDesign script is easy: add the script file to the scripts folder so that it shows up in the Scripts panel.  inside the Scripts folder in your InDesign application folder (/Applications/Adobe\\ InDesign\\ 2023\\ ","(","Prerelease-Debug",")","/Scripts). (Create the Scripts folder if it does not already exist.) Note: this may require admin access."),(0,r.mdx)("p",null,"Alternately, put the script inside the Scripts Panel folder in your preferences folder. Your preferences folder is at:"),(0,r.mdx)("p",null,"Windows: ",(0,r.mdx)("inlineCode",{parentName:"p"},"C:\\Users\\<username>\\AppData\\Roaming\\Adobe\\InDesign\\Version 18.0\\<locale>\\Scripts"),"\nMac: ",(0,r.mdx)("inlineCode",{parentName:"p"},"/Users/<username>/Library/Preferences/Adobe InDesign/Version 18.0/<locale>/Scripts"),"\nAbove, ",(0,r.mdx)("inlineCode",{parentName:"p"},"<username>")," is your user name and ",(0,r.mdx)("inlineCode",{parentName:"p"},"<locale>")," references your location and language, for example, en_US."),(0,r.mdx)("p",null,"Once the script is in the folder, it appears on the Scripts panel inside InDesign. To display the panel, choose Window > Utilities > Scripts."),(0,r.mdx)("p",null,"You  can also put aliases/shortcuts to scripts (or folders containing scripts) in the Scripts Panel folder, and they will appear in the Scripts panel."),(0,r.mdx)("p",null,'To run a specific script when InDesign starts, put it inside a folder named "Startup Scripts" inside the Scripts folder (create this folder if it does not already exist).'),(0,r.mdx)("h2",{id:"running-a-script"},"Running a script"),(0,r.mdx)("p",null,"To run a script, display the Scripts panel (choose Window > Utilities > Scripts), then double-click the script name in the Scripts panel. Many scripts display user-interface items (like dialog boxes or panels) and display alerts if necessary."),(0,r.mdx)("p",null,"We can also right-click on the script name and then click on run in drop-down menu."),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"295px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"101.69491525423729%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/d05a02f79b20c08916cdb944c3e13c57/66888/running_a_script.webp 295w"],sizes:"(max-width: 295px) 100vw, 295px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/d05a02f79b20c08916cdb944c3e13c57/60cc9/running_a_script.png 295w"],sizes:"(max-width: 295px) 100vw, 295px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-indesign/static/d05a02f79b20c08916cdb944c3e13c57/60cc9/running_a_script.png",alt:"Running a script",title:"Running a script",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("h2",{id:"using-the-scripts-panel"},"Using the scripts panel"),(0,r.mdx)("p",null,"The InDesign Scripts panel is the easiest and best way to run most InDesign scripts. If the panel is not already visible, you can display it by choosing Window > Utilities > Scripts."),(0,r.mdx)("p",null,"To edit a script shown in the Scripts panel, select the script and choose Edit Script from the Scripts panel menu. Alternatively, you can hold down the Option (Mac OS) or Alt (Windows) key and double-click the script's name. This opens the script in the editor you defined for the script file type."),(0,r.mdx)("p",null,"To open the folder containing a script shown in the Scripts panel, select the script and choose Reveal in Finder (Mac OS) or Reveal in Explorer (Windows). Alternatively, you can hold down the Command (Mac OS) or Ctrl-Shift (Windows) keys and double-click the script's name. The script folder opens in the Finder (Mac OS) or Explorer (Windows)."),(0,r.mdx)("h2",{id:"your-first-uxp-script"},"Your first UXP script"),(0,r.mdx)("p",null,"Below, we will create our first hello-world UXP InDesign script. "),(0,r.mdx)("p",null,"Our script will creates a new document, adds a text frame, and enters text in the text frame. This demonstrates how to do the following:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Create a new document."),(0,r.mdx)("li",{parentName:"ul"},"Create a text frame on a specific page."),(0,r.mdx)("li",{parentName:"ul"},"Add text to a text frame."),(0,r.mdx)("li",{parentName:"ul"},"Start a text editor and enter the following script:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'//HelloWorld.idjs\n//An InDesign UXPScript\n//\n//Creates a new document, adds a text frame,\n//resizes the text frame and adds text.\nvar myDocument = app.documents.add();\nvar myTextFrame = myDocument.pages.item(0).textFrames.add();\n/*Set the geometric bounds (the location of the top, left, bottom, and right edges) of the text frame. In this step, the script uses measurement overrides ("p" for picas) to ensure the text frame is the correct size, regardless of your default measurement units. The locations are provided as a list, or array, of values; each scripting language has a slightly different way of creating an array. */\n myTextFrame.geometricBounds = ["6p", "6p", "24p", "24p"];\n//Add text to the text frame by setting the proporty of the content to a string myTextFrame.contents = "Hello World!";\n')),(0,r.mdx)("p",null,"Save the script as a plain-text file with the .idjs file extension to the Scripts Panel folder. To run the script, double-click the script name in the Scripts panel."),(0,r.mdx)("p",null,"Congratulations! You have now created your first InDesign script. Below goes over how to add more features to it."),(0,r.mdx)("h2",{id:"adding-features-to-our-hello-world-script"},"Adding features to our Hello World script"),(0,r.mdx)("p",null,"In the following guide we will build upon the initial hello-world script we created above."),(0,r.mdx)("p",null,"Our updated script will demonstrates how to do the following:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Get the active document."),(0,r.mdx)("li",{parentName:"ul"},"Use a function (or handler in AppleScript)."),(0,r.mdx)("li",{parentName:"ul"},"Get the page dimensions and page margins of the active document."),(0,r.mdx)("li",{parentName:"ul"},"Resize a text frame."),(0,r.mdx)("li",{parentName:"ul"},"Change the formatting of the text in the text frame.")),(0,r.mdx)("p",null,"Make sure you have the Hello World document open-this script relies on objects we created in that script. If you closed the document without saving it, simply run the HelloWorld.jsx script again to make a new document."),(0,r.mdx)("p",null,"Either open the ImprovedHelloWorld.jsx tutorial script or perform the following steps to create the script:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Enter the following JavaScript in a new text file")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'//ImprovedHelloWorld.idjs\n//An InDesign UXPScript\n//\n//Enter the name of a font on your system, if necessary.\nvar myFont = app.fonts.item("Arial");\nvar myDocument = app.activeDocument;\nvar myPage = myDocument.pages.item(0);\n//Get page width and page height using the function "myGetBounds".\nvar myBounds = myGetBounds(myDocument, myPage);\nvar myTextFrame = myPage.textFrames.item(0);\n//Resize the text frame to match the publication margins.\nmyTextFrame.geometricBounds = myBounds;\nvar myParagraph = myTextFrame.paragraphs.item(0);\n//Change the font, size, and alignment.\nmyParagraph.appliedFont = myFont;\nmyParagraph.pointSize = 48;\nmyParagraph.justification = Justification.centerAlign;\nfunction myGetBounds(myDocument, myPage){\n    var myPageWidth = myDocument.documentPreferences.pageWidth;\n    var myPageHeight = myDocument.documentPreferences.pageHeight\n    if(myPage.side == PageSideOptions.leftHand){\n        var myX2 = myPage.marginPreferences.left;\n        var myX1 = myPage.marginPreferences.right;\n    }\n    else{\n        var myX1 = myPage.marginPreferences.left;\n        var myX2 = myPage.marginPreferences.right;\n    }\n    var myY1 = myPage.marginPreferences.top;\n    var myX2 = myPageWidth - myX2;\n    var myY2 = myPageHeight - myPage.marginPreferences.bottom;\n    return [myY1, myX1, myY2, myX2];\n}\n')),(0,r.mdx)("ol",{start:2},(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Save the script as a plain text file with the file extension .idjs in the Scripts Panel folder. ")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Once you've opened or created the script file, you can run the script from the InDesign Scripts panel."))),(0,r.mdx)("p",null,"Once you've opened or created the script file, you can run the script from the InDesign Scripts panel."),(0,r.mdx)("p",null,"Obviously, our \"Hello World!\" script would not be very useful in your daily work, but it has shown you the basics of InDesign scripting. In the following section, we'll show a script that does a bit more, and that demonstrates scripting techniques you're likely to use in your own scripts."),(0,r.mdx)("p",null,"While you can use an InDesign script at any point in your production process, we will start by creating a script that starts at the same point you do: We'll create a new document, set page margins, and define and apply master pages. The following figure shows a block diagram that represents the objects we'll work with."),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"462px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/9af4eb2e4ab166a714651885362e421b/5530d/1.webp 320w","/uxp-indesign/static/9af4eb2e4ab166a714651885362e421b/0b6e4/1.webp 462w"],sizes:"(max-width: 462px) 100vw, 462px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/9af4eb2e4ab166a714651885362e421b/dd4a7/1.png 320w","/uxp-indesign/static/9af4eb2e4ab166a714651885362e421b/a9e02/1.png 462w"],sizes:"(max-width: 462px) 100vw, 462px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-indesign/static/9af4eb2e4ab166a714651885362e421b/a9e02/1.png",alt:"InDesign object model",title:"InDesign object model",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("p",null,"In this section, we will look at the DocumentTemplate tutorial script. We'll break the script into a series of blocks; each block demonstrates a specific area or task in InDesign scripting."),(0,r.mdx)("p",null,"The objects in the object model generally correspond to the names of controls in the user interface, as shown in the following diagram: "),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"462px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"121.875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/db2409ca2b55e03adb51205426a885c6/5530d/2.webp 320w","/uxp-indesign/static/db2409ca2b55e03adb51205426a885c6/0b6e4/2.webp 462w"],sizes:"(max-width: 462px) 100vw, 462px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/db2409ca2b55e03adb51205426a885c6/dd4a7/2.png 320w","/uxp-indesign/static/db2409ca2b55e03adb51205426a885c6/a9e02/2.png 462w"],sizes:"(max-width: 462px) 100vw, 462px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-indesign/static/db2409ca2b55e03adb51205426a885c6/a9e02/2.png",alt:"InDesign object model",title:"InDesign object model",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("p",null,"In the following sections, we'll discuss each functional area in the DocumentConstruction script. Open this script in the script editor for the language of your choice if you would like to follow along."),(0,r.mdx)("h3",{id:"setting-up-measurement-units-and-master-spread-margins"},"Setting up measurement units and master spread margins"),(0,r.mdx)("p",null,"The following script fragment shows how to create a new document and set the margins of the first master spread."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"//Create a new document.\nvar myDocument = app.documents.add();\n//Set the measurement units and ruler origin.\nmyDocument.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.points;\nmyDocument.viewPreferences.verticalMeasurementUnits = MeasurementUnits.points;\nmyDocument.viewPreferences.rulerOrigin = RulerOrigin.pageOrigin;\n//Get a reference to the first master spread.\nvar myMasterSpread = myDocument.masterSpreads.item(0);\n//Get a reference to the margin preferences of the first page in the master spread.\nvar myMarginPreferences = myMasterSpread.pages.item(0).marginPreferences;\n//Now set up the page margins and columns.\nmyMarginPreferences.left = 84;\nmyMarginPreferences.top = 70;\nmyMarginPreferences.right = 70;\nmyMarginPreferences.bottom = 78;\nmyMarginPreferences.columnCount = 3;\nmyMarginPreferences.columnGutter = 14;\n//Page margins and columns for the right-hand page.\nvar myMarginPreferences = myMasterSpread.pages.item(1).marginPreferences;\nmyMarginPreferences.left = 84;\nmyMarginPreferences.top = 70;\nmyMarginPreferences.right = 70;\nmyMarginPreferences.bottom = 78;\nmyMarginPreferences.columnCount = 3;\nmyMarginPreferences.columnGutter = 14;\n")),(0,r.mdx)("h3",{id:"adding-a-baseline-grid"},"Adding a baseline grid"),(0,r.mdx)("p",null,"Now that we have a master spread set up, we will add a baseline grid. Here is a block diagram that shows the relationship between the objects we'll be working with:"),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"462px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"23.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/22007d61581fdfb60f6ecd1929635ca0/5530d/3.webp 320w","/uxp-indesign/static/22007d61581fdfb60f6ecd1929635ca0/0b6e4/3.webp 462w"],sizes:"(max-width: 462px) 100vw, 462px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/22007d61581fdfb60f6ecd1929635ca0/dd4a7/3.png 320w","/uxp-indesign/static/22007d61581fdfb60f6ecd1929635ca0/a9e02/3.png 462w"],sizes:"(max-width: 462px) 100vw, 462px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-indesign/static/22007d61581fdfb60f6ecd1929635ca0/a9e02/3.png",alt:"InDesign object model",title:"InDesign object model",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"var myGridPreferences = myDocument.gridPreferences;\nmyGridPreferences.baselineDivision = 14;\nmyGridPreferences.baselineStart = 70;\nmyGridPreferences.baselineGridShown = true;\n")),(0,r.mdx)("h3",{id:"adding-master-page-items"},"Adding master page items"),(0,r.mdx)("p",null,"Next, we add two text frames to the master pages. These frames will contain the auto-page-number special character and will be positioned at the bottom of the page."),(0,r.mdx)("p",null,'In the "Hello World" example, we created a text frame and specified its position and size using the geometric bounds property-an array containing the top, left, bottom, and right coordinates for the frame. The coordinates correspond to the corners of the frame, just as they would appear in the Control panel. The geometric bounds are: top = 728, left = 70, bottom = 742, and right = 528, as shown in the following two figures:'),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"462px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"31.874999999999996%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/88d2e926f55f4fad7058601c2bc0a669/5530d/4.webp 320w","/uxp-indesign/static/88d2e926f55f4fad7058601c2bc0a669/0b6e4/4.webp 462w"],sizes:"(max-width: 462px) 100vw, 462px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/88d2e926f55f4fad7058601c2bc0a669/dd4a7/4.png 320w","/uxp-indesign/static/88d2e926f55f4fad7058601c2bc0a669/a9e02/4.png 462w"],sizes:"(max-width: 462px) 100vw, 462px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-indesign/static/88d2e926f55f4fad7058601c2bc0a669/a9e02/4.png",alt:"InDesign object model",title:"InDesign object model",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"var myMasterSpread = myDocument.masterSpreads.item(0);\nvar myLeftPage = myMasterSpread.pages.item(0);\nvar myRightPage = myMasterSpread.pages.item(1);\nvar myLeftFooter = myLeftPage.textFrames.add();\nmyLeftFooter.geometricBounds = [728, 70, 742, 528];\nmyLeftFooter.textFramePreferences.firstBaselineOffset = FirstBaseline.leadingOffset;\nmyLeftFooter.contents = SpecialCharacters.autoPageNumber;\nmyLeftFooter.parentStory.characters.item(0).pointSize = 11;\nmyLeftFooter.parentStory.characters.item(0).leading = 14;\nvar myRightFooter = myRightPage.textFrames.add();\nmyRightFooter.geometricBounds = [728, 84, 742, 542];\nmyRightFooter.textFramePreferences.firstBaselineOffset = FirstBaseline.leadingOffset;\nmyRightFooter.contents = SpecialCharacters.autoPageNumber;\nmyRightFooter.parentStory.characters.item(0).pointSize = 11;\nmyRightFooter.parentStory.characters.item(0).leading = 14;\nmyRightFooter.parentStory.characters.item(0).justification = Justification.rightAlign;\n")),(0,r.mdx)("h3",{id:"adding-master-text-frames"},"Adding master text frames"),(0,r.mdx)("p",null,"Next, we add master text frames. The following block diagram shows the objects and properties we'll be working with:"),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"462px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50.9375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/7f0a8269ba37cdf7022a2066b13bc82b/5530d/5.webp 320w","/uxp-indesign/static/7f0a8269ba37cdf7022a2066b13bc82b/0b6e4/5.webp 462w"],sizes:"(max-width: 462px) 100vw, 462px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/7f0a8269ba37cdf7022a2066b13bc82b/dd4a7/5.png 320w","/uxp-indesign/static/7f0a8269ba37cdf7022a2066b13bc82b/a9e02/5.png 462w"],sizes:"(max-width: 462px) 100vw, 462px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-indesign/static/7f0a8269ba37cdf7022a2066b13bc82b/a9e02/5.png",alt:"InDesign object model",title:"InDesign object model",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'var myLeftPage = myMasterSpread.pages.item(0);\nvar myRightPage = myMasterSpread.pages.item(1);\nvar myLeftTextFrame = myLeftPage.textFrames.add();\nmyLeftTextFrame.geometricBounds = [70, 70, 714, 528];\nmyLeftTextFrame.textFramePreferences.firstBaselineOffset = FirstBaseline.leadingOffset;\nmyLeftTextFrame.textFramePreferences.textColumnCount = 3;\nmyLeftTextFrame.textFramePreferences.textColumnGutter = 14;\n//Add a label to make the frame easier to find later on.\nmyLeftTextFrame.label = "BodyTextFrame";\nvar myRightTextFrame = myRightPage.textFrames.add();\nmyRightTextFrame.geometricBounds = [70, 84, 714, 542];\nmyRightTextFrame.textFramePreferences.firstBaselineOffset = FirstBaseline.leadingOffset;\nmyRightTextFrame.textFramePreferences.textColumnCount = 3;\nmyRightTextFrame.textFramePreferences.textColumnGutter = 14;\n//Add a label to make the frame easier to find later on.\nmyRightTextFrame.label = "BodyTextFrame";\n//Link the two frames using the nextTextFrame property.\nmyLeftTextFrame.nextTextFrame = myRightTextFrame;\n')),(0,r.mdx)("h3",{id:"overriding-master-page-items-and-adding-text"},"Overriding master page items and adding text"),(0,r.mdx)("p",null,"Next, we override one of the master text frames we created and add text."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'var myTextFrame = myDocument.masterSpreads.item(0).pages.item(1).textFrames.item(0).override(myDocument.pages.item(0));\n//Add text by setting the contents of an insertion point to a string.\n//In JavaScript, "\\r" is a return character.\nmyTextFrame.insertionPoints.item(0).contents = "Headline!\\r";\n')),(0,r.mdx)("h3",{id:"adding-and-applying-a-paragraph-style"},"Adding and applying a paragraph style"),(0,r.mdx)("p",null,"Our headline looks plain, so we will format it in a paragraph style. To do that, we must create the paragraph style. The following diagram shows the objects and properties we will work with:"),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"462px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"43.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/bb7cfd60892a5466856fe3ec2fef1900/5530d/6.webp 320w","/uxp-indesign/static/bb7cfd60892a5466856fe3ec2fef1900/0b6e4/6.webp 462w"],sizes:"(max-width: 462px) 100vw, 462px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/bb7cfd60892a5466856fe3ec2fef1900/dd4a7/6.png 320w","/uxp-indesign/static/bb7cfd60892a5466856fe3ec2fef1900/a9e02/6.png 462w"],sizes:"(max-width: 462px) 100vw, 462px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-indesign/static/bb7cfd60892a5466856fe3ec2fef1900/a9e02/6.png",alt:"InDesign object model",title:"InDesign object model",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'//First, check to see if the paragraph style already exists.\nvar myParagraphStyle = myDocument.paragraphStyles.item("Heading 1");\ntry {\n    var myName = myParagraphStyle.name;\n}\ncatch (myError){\n    //The paragraph style did not exist, so create it.\n    myParagraphStyle = myDocument.paragraphStyles.add({name:"Heading 1"});\n}\n//We\'ll need to create a color. Check to see if the color already exists.\nvar myColor = myDocument.colors.item("Red");\ntry {\n    myName = myColor.name;\n}\ncatch (myError){\n    //The color did not exist, so create it.\n    myColor = myDocument.colors.add({name:"Red", model:ColorModel.process,\n    colorValue:[0,100,100,0]});\n}\n//Now set the formatting of the paragraph style.\nmyParagraphStyle.appliedFont = "Arial";\nmyParagraphStyle.fontStyle = "Bold";\nmyParagraphStyle.pointSize = 24;\nmyParagraphStyle.spaceAfter = 24;\nmyParagraphStyle.spaceBefore = 24;\nmyParagraphStyle.fillColor = myDocument.colors.item("Red");\n//Apply the style to the paragraph.\nmyDocument.pages.item(0).textFrames.item(0).paragraphs.item(0).applyParagraphStyle(\nmyParagraphStyle, true);\n//You could also use:\n//myDocument.pages.item(0).textFrames.item(0).paragraphs.item(0).appliedParagraphStyle = myParagraphStyle;\n')),(0,r.mdx)("h3",{id:"placing-a-text-file"},"Placing a text file"),(0,r.mdx)("p",null,"Next, we import a text file. We add the text after the headline in the first text frame on the first page. The script displays a dialog box that you can use to select the text file to import."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"//Display a standard open file dialog box to select a text file.\nconst uxpfs = require('uxp').storage;\nconst ufs = uxpfs.localFileSystem;\nvar myTextFile = await ufs.getFileForOpening();\n //If a text file was selected, and if you didn't press Cancel,\n//place the text file at the first insertion point after the headline.\nif((myTextFile != \"\")&&(myTextFile != null)){\n    myTextFrame.insertionPoints.item(-1).place(myTextFile);\n}\n")),(0,r.mdx)("h3",{id:"placing-a-graphic"},"Placing a graphic"),(0,r.mdx)("p",null,"Placing a graphic is like importing a text file. Again, the script displays a dialog box that you can use to select the graphic to place. When we place the graphic, InDesign returns a reference to the graphic itself rather than to the frame containing the graphic. To get a reference to the frame, use the parent property of the graphic. Once we have that reference, we can apply an object style to the frame."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'//Display a standard open file dialog box to select a graphic file.\nvar myGraphicFile = await ufs.getFileForOpening();\n//If a graphic file was selected, and if you didn\'t press Cancel,\n//place the graphic file on the page.\nif((myGraphicFile != "")&&(myGraphicFile != null)){\n    var myGraphic = myDocument.pages.item(0).place(myGraphicFile);\n    //Since you can place multiple graphics at once, the place method\n    //returns an array. To get the graphic you placed, get the first\n    //item in the array (JavaScript arrays start with item 0).\n    myGraphic = myGraphic[0];\n    //Create an object style to apply to the graphic frame.\n    var myObjectStyle = myDocument.objectStyles.item("GraphicFrame");\n    try {\n        var myName = myObjectStyle.name;\n    }\n    catch (myError){\n        //The object style did not exist, so create it.\n        myObjectStyle = myDocument.objectStyles.add({name:"GraphicFrame"});\n    }\n    myObjectStyle.enableStroke = true;\n    myObjectStyle.strokeWeight = 3;\n    myObjectStyle.strokeType = myDocument.strokeStyles.item("Solid");\n    myObjectStyle.strokeColor = myDocument.colors.item("Red");\n    //The frame containing the graphic is the parent of the graphic.\n    var myFrame = myGraphic.parent;\n    myFrame.applyObjectStyle(myObjectStyle, true);\n    //Resize the frame to a specific size.\n    myFrame.geometricBounds = [0,0,144,144];\n    //Fit the graphic to the frame proportionally.\n    myFrame.fit(FitOptions.proportionally);\n    //Next, fit frame to the resized graphic.\n    myFrame.fit(FitOptions.frameToContent);\n    var myBounds = myFrame.geometricBounds;\n    var myGraphicWidth = myBounds[3]-myBounds[1];\n    //Move the graphic frame.\n    var myPageWidth = myDocument.documentPreferences.pageWidth;\n    var myTopMargin = myDocument.pages.item(0).marginPreferences.top;\n    myFrame.move([myPageWidth-myGraphicWidth, myTopMargin]);\n    //Apply a text wrap to the graphic frame.\n    myFrame.textWrapPreferences.textWrapMode = TextWrapModes.BOUNDING_BOX_TEXT_WRAP;\n    myFrame.textWrapPreferences.textWrapOffset = [24, 12, 24, 12];\n}\n')),(0,r.mdx)("p",null,"Congratulations! You've now created your first advanced InDesign script. "))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-getting-started-index-md-b9708e43f0e3c464ad7e.js.map