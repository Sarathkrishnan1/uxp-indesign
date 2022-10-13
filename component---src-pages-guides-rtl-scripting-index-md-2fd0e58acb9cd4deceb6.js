"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[48658],{50367:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return p},default:function(){return h}});var i=n(87462),a=n(63366),r=(n(15007),n(64983)),o=n(91515),s=["components"],p={},c={_frontmatter:p},m=o.Z;function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.mdx)(m,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"middle-eastern-scripting-guide"},"Middle Eastern Scripting Guide"),(0,r.mdx)("p",null,"The Middle Eastern feature of InDesign Server provides support for designing and publishing documents in Middle Eastern languages. This gives you unprecedented capability to build multilingual publications, mixing Roman and Middle Eastern scripts with ease and flexibility in your layouts."),(0,r.mdx)("p",null,"This section shows how to use Middle Eastern features with scripting. This section assumes that you are familiar with Middle Eastern features in InDesign."),(0,r.mdx)("h2",{id:"setting-up-a-document"},"Setting up a document"),(0,r.mdx)("h3",{id:"setting-page-binding"},"Setting page binding"),(0,r.mdx)("p",null,"In a Roman publication, the binding of documents is always on the left. Conversely, in an Arabic or Hebrew publication, binding is on the right. With InDesign Server, you can create a document in which the pages are bound on the left edge or on the right edge. From InDesign Scripting, you can control this using the pageBinding property. This property is part of the DocumentPreferences object and can get one value from the PageBindingOptions enumeration (default, leftToRight or rightToLeft)."),(0,r.mdx)("p",null,"The following sample script creates a new document, and then sets or gets the page binding for the created document (for the complete script, see PageBinding)."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"var myDocument = app.documents.add();\nwith(myDocument ){\n    //set number of pages\n    documentPreferences.pagesPerDocument = 4;\n    //set binding options for the document\n    documentPreferences.pageBinding = PageBindingOptions.rightToLeft;\n}\n")),(0,r.mdx)("h2",{id:"numbering"},"Numbering"),(0,r.mdx)("p",null,"InDesign Server comes with special styles for page, paragraph, and footnote numbering. You can choose to apply standard, Arabic (Arabic Abjad and Arabic Alif Ba Tah) or Hebrew (Hebrew Biblical Standard and Hebrew Non-Standard Decimal) styles. With InDesign scripting, you can access these settings with the PageNumberStyle and FootnoteNumberingStyle properties."),(0,r.mdx)("h3",{id:"settings-for-page-numbering"},"Settings for page numbering"),(0,r.mdx)("p",null,"The following script shows how to set these settings for pages (for the complete script, see NumberingME)."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"myDocument.sections.item(0).pageNumberStyle = PageNumberStyle.arabicAlifBaTah;\nmyDocument.sections.item(1).pageNumberStyle = PageNumberStyle.arabicAbjad;\n")),(0,r.mdx)("h3",{id:"settings-for-footnote-numbering"},"Settings for footnote numbering"),(0,r.mdx)("p",null,"The following script shows how to set ME numbering settings for footnotes (for the complete script, see NumberingME):"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"myDocument.footnoteOptions.footnoteNumberingStyle = FootnoteNumberingStyle.hebrewBiblical;\n")),(0,r.mdx)("h2",{id:"setting-composer"},"Setting composer"),(0,r.mdx)("p",null,"The composer that is used to create text frames in a Roman publication is different from the ME Composer. InDesign Server comes with a document method changeComposer that can be used in a Roman publication to changes the composer for all text frames to the Adobe World-Ready Composer. Adobe Paragraph Composer is changed to Adobe World-Ready Paragraph Composer; Adobe Single-line Composer is changed to Adobe World-Ready Single-line Composer."),(0,r.mdx)("p",null,"The following script shows how to use this method (for the complete script, see ChangeComposer):"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"myDocument.changeComposer();\n")),(0,r.mdx)("h2",{id:"working-with-text"},"Working with text"),(0,r.mdx)("h3",{id:"inserting-special-me-character"},"Inserting special ME character"),(0,r.mdx)("p",null,"Using enumerations, InDesign Server gives you the ability to insert three Hebrew characters (Geresh, Gershayim, Maqaf) and four Arabic ones (Kashida, Arabic comma, Arabic Semicolon, and Arabic Question mark), as well as a right-to-left marker or left-to-right marker. The following script shows how to insert special Middle Eastern characters (for the complete script, see SpecialCharactersME)."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'//Entering InDesign special ME characters by their enumerations:\nmyTextFrame.parentStory.insertionPoints.item(-1).contents = "Hebrew Maqaf: ";\nmyTextFrame.parentStory.insertionPoints.item(-1).contents = SpecialCharacters.hebrewMaqaf;\nmyTextFrame.parentStory.insertionPoints.item(-1).contents = "\\r";\nmyTextFrame.parentStory.insertionPoints.item(-1).contents = "Hebrew Geresh: ";\nmyTextFrame.parentStory.insertionPoints.item(-1).contents = SpecialCharacters.hebrewGeresh;\nmyTextFrame.parentStory.insertionPoints.item(-1).contents = "\\r";\nmyTextFrame.parentStory.insertionPoints.item(-1).contents = "Hebrew Gershayim: ";\nmyTextFrame.parentStory.insertionPoints.item(-1).contents = SpecialCharacters.hebrewGershayim;\nmyTextFrame.parentStory.insertionPoints.item(-1).contents = "\\r";\nmyTextFrame.parentStory.insertionPoints.item(-1).contents = "Arabic Kashida: ";\nmyTextFrame.parentStory.insertionPoints.item(-1).contents = SpecialCharacters.arabicKashida;\nmyTextFrame.parentStory.insertionPoints.item(-1).contents = "\\r";\nmyTextFrame.parentStory.insertionPoints.item(-1).contents = "Arabic Comma: ";\nmyTextFrame.parentStory.insertionPoints.item(-1).contents = SpecialCharacters.arabicComma;\nmyTextFrame.parentStory.insertionPoints.item(-1).contents = "\\r";\nmyTextFrame.parentStory.insertionPoints.item(-1).contents = "Arabic Semicolon: ";\nmyTextFrame.parentStory.insertionPoints.item(-1).contents = SpecialCharacters.arabicSemicolon;\nmyTextFrame.parentStory.insertionPoints.item(-1).contents = "\\r";\nmyTextFrame.parentStory.insertionPoints.item(-1).contents = "Arabic Question Mark: ";\nmyTextFrame.parentStory.insertionPoints.item(-1).contents = SpecialCharacters.arabicQuestionMark;\nmyTextFrame.parentStory.insertionPoints.item(-1).contents = "\\r";\nmyTextFrame.parentStory.insertionPoints.item(-1).contents = "Right To Left Mark: ";\nmyTextFrame.parentStory.insertionPoints.item(-1).contents = SpecialCharacters.rightToLeftMark;\nmyTextFrame.parentStory.insertionPoints.item(-1).contents = "\\r";\nmyTextFrame.parentStory.insertionPoints.item(-1).contents = "Left To Right Mark: ";\nmyTextFrame.parentStory.insertionPoints.item(-1).contents = SpecialCharacters.leftToRightMark;\nmyTextFrame.parentStory.insertionPoints.item(-1).contents = "\\r";\n')),(0,r.mdx)("h3",{id:"finding-and-replacing-me-text"},"Finding and replacing ME text"),(0,r.mdx)("p",null,"With InDesign scripting, you can find and replace Middle Eastern text. The following sample script shows how to find and replace words in the Middle Eastern text (for the complete script, see MENAFindAndReplaceText)."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'var myDocument = app.documents.add();\n//Clear the find/change text preferences.\napp.findTextPreferences = NothingEnum.nothing;\napp.changeTextPreferences = NothingEnum.nothing;\n//Search the document for the string "Adobe".\napp.findTextPreferences.findWhat = "أدوبي";\n//Set the find options.\napp.findChangeTextOptions.caseSensitive = false;\napp.findChangeTextOptions.includeFootnotes = false;\napp.findChangeTextOptions.includeHiddenLayers = false;\napp.findChangeTextOptions.includeLockedLayersForFind = false;\napp.findChangeTextOptions.includeLockedStoriesForFind = false;\napp.findChangeTextOptions.includeMasterPages = false;\napp.findChangeTextOptions.wholeWord = false;\nvar myFoundItems = myDocument.findText(); Converting an InDesign script to InDesign Server\napp.findTextPreferences = NothingEnum.nothing;\napp.changeTextPreferences = NothingEnum.nothing;\n//Replace the text in myString\nfor(var i = 0; i < myFoundItems.length; i++)\n{\n    myFoundItems[i].contents = "Adobe";\n}\n')),(0,r.mdx)("h2",{id:"setting-story-direction-property"},"Setting story direction property"),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"131px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"229.00763358778627%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/fdc68a6ff8c81ce37af274dd752a6a13/61eb5/1.webp 131w"],sizes:"(max-width: 131px) 100vw, 131px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/fdc68a6ff8c81ce37af274dd752a6a13/d8ae8/1.png 131w"],sizes:"(max-width: 131px) 100vw, 131px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-indesign/static/fdc68a6ff8c81ce37af274dd752a6a13/d8ae8/1.png",alt:"Setting story direction property",title:"Setting story direction property",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("p",null,"With InDesign Scripting, if you need to change the main direction of an existing text story, even after typing or placing some text inside, use the storyDirection property. This property is part of the StoryPreferences object and can get one value from the StoryDirectionOptions enumeration (leftToRightDirection and rightToLeftDirection). The following sample script creates a two-column text frame, then sets the story direction (for the complete script, see StoryDirection)."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'with(myTextFrame){\n    //Set the bounds of the text frame.\n    geometricBounds = [70, 200, 300, 500];\n    //Fill the text frame with placeholder text in 2 column.\n    textFramePreferences.textColumnCount = 2;\n    contents = "أدوات التصميم القوية والمتكاملة رقم 1 من أدوبي"\n    parentStory.justification =  Justification.rightJustified;\n    //Now set the story direction left to right\n    parentStory.storyPreferences.storyDirection = StoryDirectionOptions.leftToRightDirection;\n}\n')),(0,r.mdx)("h2",{id:"setting-paragraph-attributes"},"Setting paragraph attributes"),(0,r.mdx)("p",null,"InDesign Server comes with special paragraph settings, such as Paragraph Direction and Justification, for laying out Arabic/Hebrew text."),(0,r.mdx)("h3",{id:"paragraphdirection"},"ParagraphDirection"),(0,r.mdx)("p",null,"Paragraph direction controls the order of multidirectional text inside the paragraph. By default, the paragraph direction is Left To Right."),(0,r.mdx)("p",null,"With InDesign scripting, if you need to change the main direction of an existing paragraph, use the paragraphDirection property. This property is part of the Text objects and can get one value from the ParagraphDirectionOptions enumeration (leftToRightDirection and rightToLeftDirection). The following sample script shows how to set this property (for the complete script, see MEParagraphAttributes)."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"with(myTextFrame){\n    //Set ME paragraph attributes.\n    paragraphs.item(0).paragraphDirection = ParagraphDirectionOptions.leftToRightDirection;\n}\n")),(0,r.mdx)("h3",{id:"paragraph-direction-for-application-and-document"},"Paragraph direction for application and document"),(0,r.mdx)("p",null,"You can also use this property to set text defaults both for the application and for each document:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"myDocument.textDefaults.paragraphDirection = ParagraphDirectionOptions.rightToLeftDirection;\n")),(0,r.mdx)("h2",{id:"justification"},"Justification"),(0,r.mdx)("p",null,"With InDesign scripting, you can change the default or the existing attribute of a paragraph with the ParagraphJustification property. This property is part of the Text objects and can get one value from the ParagraphJustificationOptions enumeration (defaultJustification, arabicJustification, and naskhJustification). The following sample script shows how to set this property (for the complete script, see MEParagraphAttributes)."),(0,r.mdx)("h3",{id:"justification-for-an-existing-paragraph"},"Justification for an existing paragraph"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"with(myTextFrame){\n    //Set ME paragraph attributes.\n    paragraphs.item(1).paragraphJustification = ParagraphJustificationOptions.naskhJustification;\n}\n")),(0,r.mdx)("h3",{id:"justification-for-text-defaults"},"Justification for text defaults"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"myDocument.textDefaults.paragraphJustification = ParagraphJustificationOptions.arabicJustification;\n")),(0,r.mdx)("h2",{id:"setting-character-attributes"},"Setting character attributes"),(0,r.mdx)("p",null,"InDesign Server comes with special character settings for laying out Arabic/Hebrew text. These settings allow you to finely tune your Arabic/Hebrew text. With InDesign scripting, these settings correspond to a number of properties that can be applied to a Text object. The MECharactrsAttributes tutorial script shows how to set every Middle Eastern property of a text object."),(0,r.mdx)("h3",{id:"digits"},"Digits"),(0,r.mdx)("p",null,"You can choose the language in which you want your numeric digits to be displayed. The Default setting means that the numbers will be in the same language as that of the previous character. Otherwise, you can choose between Arabic, Hindi, and Farsi numbers. The corresponding text object property is DigitsType."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'myTextFrame.contents = "Farsi Digits: 1234567890";\nmyTextFrame.paragraphs.item(0).digitsType = DigitsTypeOptions.farsiDigits;\n')),(0,r.mdx)("h3",{id:"kashidas"},"Kashidas"),(0,r.mdx)("p",null,"The Arabic and Naskh justification algorithms insert kashidas and spaces. If you don't want Kashidas to be inserted in the Arabic text, with InDesign scripting, you can change the Kashidas property to set it to kashidasOff; otherwise, set it to defaultKashidas."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'myTextFrame.contents = "كُتِبَ Kashidas Off";\nmyTextFrame.paragraphs.item(0).kashidas = KashidasOptions.kashidasOff;\nmyTextFrame.paragraphs.item(0).justification = Justification.fullyJustified;\nmyTextFrame.paragraphs.item(0).paragraphJustification = ParagraphJustificationOptions.naskhJustification;\n')),(0,r.mdx)("h3",{id:"characters-direction"},"Characters direction"),(0,r.mdx)("p",null,"To correctly handle bidirectional text, InDesign Server stores character direction information. With scripting, this information can be changed using the CharacterDirection property which can get one value from the CharacterDirectionOptions enumeration (defaultDirection, leftToRightDirection and rightToLeftDirection)."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'myTextFrame.contents = "Farsi + L dir: 1234567890";\nfor (i=15 ; i < 25 ; i++) {\n    myTextFrame.parentStory.characters.item(i).characterDirection = CharacterDirectionOptions.leftToRightDirection;\n}\n')),(0,r.mdx)("h3",{id:"diacritic-positioning"},"Diacritic positioning"),(0,r.mdx)("p",null,"Short Arabic vowels are floating diacritics, written either over or under the consonants. Therefore, it is important that the diacritics be properly placed over the consonants, both horizontally and vertically."),(0,r.mdx)("p",null,"Diacritic Positioning can be accessed with scripting using the DiacriticPosition to choose from five predefined positions (defaultPosition, loosePosition, mediumPosition, tightPosition, and opentypePosition) or a custom position using the XOffsetDiacritic for horizontal adjustment and YOffsetDiacritic for vertical adjustment."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'myTextFrame.contents = "كُتِبَ Loose";\nmyTextFrame.paragraphs.item(0).diacriticPosition = DiacriticPositionOptions.loosePosition;\nmyTextFrame.contents = "كُتِبَ Custom";\nmyTextFrame.parentStory.characters.item(1).xOffsetDiacritic = 150;\nmyTextFrame.parentStory.characters.item(1).yOffsetDiacritic = -150;\n')),(0,r.mdx)("h3",{id:"open-type-features"},"Open Type features"),(0,r.mdx)("p",null,"If you are using an Open Type Font in your layout, then you have access to special Open Type features. These features can be accessed with scripting using the OtfOverlapSwash, OtfStylisticAlternate, OtfJustificationAlternate, or OtfStretchedAlternate properties."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},"myTextFrame.paragraphs.item(0).otfOverlapSwash = true;\nmyTextFrame.paragraphs.item(0).otfStylisticAlternate = true;\nmyTextFrame.paragraphs.item(0).otfJustificationAlternate = true;\nmyTextFrame.paragraphs.item(0).otfStretchedAlternate = true;\n")),(0,r.mdx)("h2",{id:"using-styles"},"Using styles"),(0,r.mdx)("p",null,"Paragraph and character styles are the keys to text formatting productivity and should be a central part of any script that applies text formatting. While creating a Character or Paragraph style, you will access all the preceding explained Character and Paragraph attribute properties on the CharacterStyles and ParagraphStyles Objects."),(0,r.mdx)("p",null,"The following example script fragment shows how to create paragraph and character styles with Middle Eastern attributes (for the complete script, see CreateStylesME)."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'//Create a character style named "myCharacterStyleME" if\n//no style by that name already exists.\ntry{\n    myCharacterStyleME = myDocument.characterStyles.item("myCharacterStyleME");\n    //If the style does not exist, trying to get its name will generate an error.\n    myName = myCharacterStyleME.name;\n}\ncatch (myError){\n    //The style did not exist, so create it.\n    myCharacterStyleME = myDocument.characterStyles.add({name:"myCharacterStyleME"});\n}\nwith(myCharacterStyleME){\n    appliedFont = app.fonts.item("Adobe Arabic");\n    digitsType = DigitsTypeOptions.farsiDigits;\n    characterDirection = CharacterDirectionOptions.leftToRightDirection;\n}\n//Create a paragraph style named "myParagraphStyle" if\n//no style by that name already exists.\ntry{\n    myParagraphStyleME = myDocument.paragraphStyles.item("myParagraphStyleME");\n    //If the paragraph style does not exist, trying to get its name will generate an error.\n    myName = myParagraphStyleME.name;\n}\ncatch (myError){\n    //The paragraph style did not exist, so create it.\n    myParagraphStyleME = myDocument.paragraphStyles.add({name:"myParagraphStyleME"});\n}\nwith(myParagraphStyleME){\n    justification =  Justification.fullyJustified;\n    paragraphDirection = ParagraphDirectionOptions.rightToLeftDirection;\n    paragraphJustification = ParagraphJustificationOptions.naskhJustification;\n    pointSize = 12;\n    kashidas = KashidasOptions.defaultKashidas;\n    digitsType = DigitsTypeOptions.hindiDigits;\n    appliedFont = app.fonts.item("Adobe Arabic");\n    otfJustificationAlternate = true;\n}\n')))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-rtl-scripting-index-md-2fd0e58acb9cd4deceb6.js.map