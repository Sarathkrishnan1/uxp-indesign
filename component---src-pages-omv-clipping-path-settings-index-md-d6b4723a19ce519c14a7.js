"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[44119],{8794:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return c}});var n=a(87462),p=a(63366),r=(a(15007),a(64983)),m=a(91515),o=["components"],l={},d={_frontmatter:l},i=m.Z;function c(e){var t=e.components,a=(0,p.Z)(e,o);return(0,r.mdx)(i,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"clippingpathsettings"},"ClippingPathSettings"),(0,r.mdx)("p",null,"Clipping path settings."),(0,r.mdx)("h2",{id:"instance"},"Instance"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},(0,r.mdx)("em",{parentName:"p"},"Read Only")," "),(0,r.mdx)("p",{parentName:"blockquote"},"String ",(0,r.mdx)("strong",{parentName:"p"},"photoshopPathNames")," "),(0,r.mdx)("p",{parentName:"blockquote"},"A list of the clipping paths stored in the graphic."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},(0,r.mdx)("em",{parentName:"p"},"Read Only")," "),(0,r.mdx)("p",{parentName:"blockquote"},"String ",(0,r.mdx)("strong",{parentName:"p"},"alphaChannelPathNames")," "),(0,r.mdx)("p",{parentName:"blockquote"},"A list of the alpha channels stored in the graphic."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},(0,r.mdx)("em",{parentName:"p"},"Read Only")," "),(0,r.mdx)("p",{parentName:"blockquote"},"Boolean ",(0,r.mdx)("strong",{parentName:"p"},"isValid")," "),(0,r.mdx)("p",{parentName:"blockquote"},"Returns true if the object specifier resolves to valid objects."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},(0,r.mdx)("em",{parentName:"p"},"Read Only")," "),(0,r.mdx)("p",{parentName:"blockquote"},"Mixed ",(0,r.mdx)("strong",{parentName:"p"},"parent")," "),(0,r.mdx)("p",{parentName:"blockquote"},"The parent of the ClippingPathSettings (a Image, EPS, WMF, PICT, PDF or ImportedPage)."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},(0,r.mdx)("em",{parentName:"p"},"Read Only")," "),(0,r.mdx)("p",{parentName:"blockquote"},"Paths ",(0,r.mdx)("strong",{parentName:"p"},"paths")," "),(0,r.mdx)("p",{parentName:"blockquote"},"A collection of paths."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},(0,r.mdx)("em",{parentName:"p"},"Read Only")," "),(0,r.mdx)("p",{parentName:"blockquote"},"Events ",(0,r.mdx)("strong",{parentName:"p"},"events")," "),(0,r.mdx)("p",{parentName:"blockquote"},"A collection of events."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},(0,r.mdx)("em",{parentName:"p"},"Read Only")," "),(0,r.mdx)("p",{parentName:"blockquote"},"EventListeners ",(0,r.mdx)("strong",{parentName:"p"},"eventListeners")," "),(0,r.mdx)("p",{parentName:"blockquote"},"A collection of event listeners."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"ClippingPathType ",(0,r.mdx)("strong",{parentName:"p"},"clippingType")," "),(0,r.mdx)("p",{parentName:"blockquote"},"The clipping path type."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"Boolean ",(0,r.mdx)("strong",{parentName:"p"},"invertPath")," "),(0,r.mdx)("p",{parentName:"blockquote"},"If true, inverts the clipping path."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"Boolean ",(0,r.mdx)("strong",{parentName:"p"},"includeInsideEdges")," "),(0,r.mdx)("p",{parentName:"blockquote"},"If true, creates interior clipping paths within the surrounding clipping path. Note: Valid only when clipping type is alpha channel or detect edges."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"Boolean ",(0,r.mdx)("strong",{parentName:"p"},"restrictToFrame")," "),(0,r.mdx)("p",{parentName:"blockquote"},"If true, truncates the clipping path at the edge of the frame containing the graphic. Note: Valid only when clipping type is alpha channel or detect edges."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"Boolean ",(0,r.mdx)("strong",{parentName:"p"},"useHighResolutionImage")," "),(0,r.mdx)("p",{parentName:"blockquote"},"If true, uses the high-resolution version of the graphic to create the clipping path. If false, calculates the clipping path based on screen-display resolution. Note: Valid only when clipping type is detect edges."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"Number ",(0,r.mdx)("strong",{parentName:"p"},"threshold")," "),(0,r.mdx)("p",{parentName:"blockquote"},"The lowest value (darkest) pixel to allow in the image. All pixels in the image whose values are greater than (lighter than) the threshold value are clipped (obscured). (Range: 0 to 255) Note: Valid only when clipping type is detect edges or alpha channel."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"Number ",(0,r.mdx)("strong",{parentName:"p"},"tolerance")," "),(0,r.mdx)("p",{parentName:"blockquote"},"Specifies how similar a pixel's intensity value can be to the threshold value before the pixel is obscured by the clipping path. (Range: 0 to 10) Note: Valid only when clipping type is detect edges or alpha channel."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"Measurement Unit (Number or String)=any ",(0,r.mdx)("strong",{parentName:"p"},"insetFrame")," "),(0,r.mdx)("p",{parentName:"blockquote"},"Shrinks the area enclosed by the clipping path by the specified amount. (Range depends on the unit. For points: -10000 to 10000; picas: -833p4 to 833p4; inches: -138.8889 to 138.8889; mm: -3527.778 to 3527.778; cm: -352.7778 to 352.7778; ciceros: -781c11.889 to 781c11.889)"),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"String ",(0,r.mdx)("strong",{parentName:"p"},"appliedPathName")," "),(0,r.mdx)("p",{parentName:"blockquote"},"The name of the Photoshop path or alpha channel to use as a clipping path."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"Object ",(0,r.mdx)("strong",{parentName:"p"},"properties")," "),(0,r.mdx)("p",{parentName:"blockquote"},"A property that allows setting of several properties at the same time.")),(0,r.mdx)("h3",{id:"methods"},"Methods"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"PageItem ",(0,r.mdx)("strong",{parentName:"p"},"convertToFrame"),"()"),(0,r.mdx)("p",{parentName:"blockquote"},"Converts the clipping path to a frame."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"String ",(0,r.mdx)("strong",{parentName:"p"},"toSource"),"()"),(0,r.mdx)("p",{parentName:"blockquote"},"Generates a string which, if executed, will return the ClippingPathSettings."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"ClippingPathSettings ",(0,r.mdx)("strong",{parentName:"p"},"getElements"),"()"),(0,r.mdx)("p",{parentName:"blockquote"},"Resolves the object specifier, creating an array of object references."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"String ",(0,r.mdx)("strong",{parentName:"p"},"toSpecifier"),"()"),(0,r.mdx)("p",{parentName:"blockquote"},"Retrieves the object specifier."),(0,r.mdx)("hr",{parentName:"blockquote"}),(0,r.mdx)("p",{parentName:"blockquote"},"EventListener ",(0,r.mdx)("strong",{parentName:"p"},"addEventListener"),"( String ",(0,r.mdx)("strong",{parentName:"p"},"eventType"),", Mixed ",(0,r.mdx)("strong",{parentName:"p"},"handler"),", Boolean ",(0,r.mdx)("strong",{parentName:"p"},"captures")," )"),(0,r.mdx)("p",{parentName:"blockquote"},"Adds an event listener."),(0,r.mdx)("h4",{parentName:"blockquote",id:"parameters"},"Parameters"),(0,r.mdx)("table",{parentName:"blockquote"},(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},"eventType"),(0,r.mdx)("td",{parentName:"tr",align:null},"The event type.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Mixed"),(0,r.mdx)("td",{parentName:"tr",align:null},"handler"),(0,r.mdx)("td",{parentName:"tr",align:null},"The event handler. Can accept: File or JavaScript Function.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"captures"),(0,r.mdx)("td",{parentName:"tr",align:null},"This parameter is obsolete. (Optional)"))))),(0,r.mdx)("hr",null),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Boolean ",(0,r.mdx)("strong",{parentName:"p"},"removeEventListener"),"( String ",(0,r.mdx)("strong",{parentName:"p"},"eventType"),", Mixed ",(0,r.mdx)("strong",{parentName:"p"},"handler"),", Boolean ",(0,r.mdx)("strong",{parentName:"p"},"captures")," )"),(0,r.mdx)("p",{parentName:"blockquote"},"Removes the event listener."),(0,r.mdx)("h4",{parentName:"blockquote",id:"parameters-1"},"Parameters"),(0,r.mdx)("table",{parentName:"blockquote"},(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},"eventType"),(0,r.mdx)("td",{parentName:"tr",align:null},"The registered event type.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Mixed"),(0,r.mdx)("td",{parentName:"tr",align:null},"handler"),(0,r.mdx)("td",{parentName:"tr",align:null},"The registered event handler. Can accept: File or JavaScript Function.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"captures"),(0,r.mdx)("td",{parentName:"tr",align:null},"This parameter is obsolete. (Optional)"))))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-omv-clipping-path-settings-index-md-d6b4723a19ce519c14a7.js.map