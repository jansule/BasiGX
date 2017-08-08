Ext.data.JsonP.BasiGX_view_button_ToggleLegend({"tagname":"class","name":"BasiGX.view.button.ToggleLegend","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"ToggleLegend.js","href":"ToggleLegend.html#BasiGX-view-button-ToggleLegend"}],"aliases":{"widget":["basigx-button-togglelegend"]},"alternateClassNames":[],"extends":"BasiGX.view.button.Base","mixins":[],"requires":["BasiGX.util.Map","Ext.app.ViewModel"],"uses":[],"members":[{"name":"handler","tagname":"cfg","owner":"BasiGX.view.button.ToggleLegend","id":"cfg-handler","meta":{"private":true}},{"name":"legendTreeXType","tagname":"cfg","owner":"BasiGX.view.button.ToggleLegend","id":"cfg-legendTreeXType","meta":{}},{"name":"bind","tagname":"property","owner":"BasiGX.view.button.ToggleLegend","id":"property-bind","meta":{}},{"name":"glyph","tagname":"property","owner":"BasiGX.view.button.ToggleLegend","id":"property-glyph","meta":{}},{"name":"html","tagname":"property","owner":"BasiGX.view.button.ToggleLegend","id":"property-html","meta":{"private":true}},{"name":"liveDemoConfig","tagname":"property","owner":"BasiGX.view.button.ToggleLegend","id":"property-liveDemoConfig","meta":{}},{"name":"viewModel","tagname":"property","owner":"BasiGX.view.button.ToggleLegend","id":"property-viewModel","meta":{}},{"name":"constructor","tagname":"method","owner":"BasiGX.view.button.Base","id":"method-constructor","meta":{}},{"name":"getHandler","tagname":"method","owner":"BasiGX.view.button.ToggleLegend","id":"method-getHandler","meta":{}},{"name":"getLegendTreeXType","tagname":"method","owner":"BasiGX.view.button.ToggleLegend","id":"method-getLegendTreeXType","meta":{}},{"name":"setHandler","tagname":"method","owner":"BasiGX.view.button.ToggleLegend","id":"method-setHandler","meta":{}},{"name":"setLegendTreeXType","tagname":"method","owner":"BasiGX.view.button.ToggleLegend","id":"method-setLegendTreeXType","meta":{}}],"code_type":"ext_define","id":"class-BasiGX.view.button.ToggleLegend","component":false,"superclasses":["Ext.Button","BasiGX.view.button.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Button<div class='subclass '><a href='#!/api/BasiGX.view.button.Base' rel='BasiGX.view.button.Base' class='docClass'>BasiGX.view.button.Base</a><div class='subclass '><strong>BasiGX.view.button.ToggleLegend</strong></div></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/BasiGX.util.Map' rel='BasiGX.util.Map' class='docClass'>BasiGX.util.Map</a></div><div class='dependency'>Ext.app.ViewModel</div><h4>Files</h4><div class='dependency'><a href='source/ToggleLegend.html#BasiGX-view-button-ToggleLegend' target='_blank'>ToggleLegend.js</a></div></pre><div class='doc-contents'><p>ToggleLegend Button</p>\n\n<p>Button used to toggle the collapsed state of the legend.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-handler' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.ToggleLegend'>BasiGX.view.button.ToggleLegend</span><br/><a href='source/ToggleLegend.html#BasiGX-view-button-ToggleLegend-cfg-handler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.ToggleLegend-cfg-handler' class='name expandable'>handler</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-legendTreeXType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.ToggleLegend'>BasiGX.view.button.ToggleLegend</span><br/><a href='source/ToggleLegend.html#BasiGX-view-button-ToggleLegend-cfg-legendTreeXType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.ToggleLegend-cfg-legendTreeXType' class='name expandable'>legendTreeXType</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Placeholder for the xtype of the legendtree panel component\n(e.g. ...</div><div class='long'><p>Placeholder for the xtype of the legendtree panel component\n(e.g. 'basigx-panel-legendtree').\nWill be used to be able to determine the component dynamically.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-bind' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.ToggleLegend'>BasiGX.view.button.ToggleLegend</span><br/><a href='source/ToggleLegend.html#BasiGX-view-button-ToggleLegend-property-bind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.ToggleLegend-property-bind' class='name expandable'>bind</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{text: &#39;{text}&#39;}</code></p><p>Overrides: <a href=\"#!/api/BasiGX.view.button.Base-property-bind\" rel=\"BasiGX.view.button.Base-property-bind\" class=\"docClass\">BasiGX.view.button.Base.bind</a></p></div></div></div><div id='property-glyph' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.ToggleLegend'>BasiGX.view.button.ToggleLegend</span><br/><a href='source/ToggleLegend.html#BasiGX-view-button-ToggleLegend-property-glyph' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.ToggleLegend-property-glyph' class='name expandable'>glyph</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The icons the button should use. ...</div><div class='long'><p>The icons the button should use.\nClassic Toolkit uses glyphs, modern toolkit uses html</p>\n<p>Defaults to: <code>&#39;xf022@FontAwesome&#39;</code></p></div></div></div><div id='property-html' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.ToggleLegend'>BasiGX.view.button.ToggleLegend</span><br/><a href='source/ToggleLegend.html#BasiGX-view-button-ToggleLegend-property-html' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.ToggleLegend-property-html' class='name expandable'>html</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>&#39;&lt;i class=&quot;fa fa-list-alt fa-2x&quot;&gt;&lt;/i&gt;&#39;</code></p></div></div></div><div id='property-liveDemoConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.ToggleLegend'>BasiGX.view.button.ToggleLegend</span><br/><a href='source/ToggleLegend.html#BasiGX-view-button-ToggleLegend-property-liveDemoConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.ToggleLegend-property-liveDemoConfig' class='name expandable'>liveDemoConfig</a> : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>A config object to show this tool in action (live demo) when using the\ncontext sensitive help ...</div><div class='long'><p>A config object to show this tool in action (live demo) when using the\ncontext sensitive help</p>\n<p>Defaults to: <code>[{moveMouseTo: &#39;basigx-button-togglelegend&#39;}, {clickOnButton: &#39;basigx-button-togglelegend&#39;}]</code></p></div></div></div><div id='property-viewModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.ToggleLegend'>BasiGX.view.button.ToggleLegend</span><br/><a href='source/ToggleLegend.html#BasiGX-view-button-ToggleLegend-property-viewModel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.ToggleLegend-property-viewModel' class='name expandable'>viewModel</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{data: {tooltip: &#39;Layerauswahl&#39;, text: null, documentation: &#39;&lt;h2&gt;Layerauswahl&lt;/h2&gt;• Ein Klick auf &#39; + &#39;den Button klappt die Legendenansicht ein oder aus.&#39;}}</code></p><p>Overrides: <a href=\"#!/api/BasiGX.view.button.Base-property-viewModel\" rel=\"BasiGX.view.button.Base-property-viewModel\" class=\"docClass\">BasiGX.view.button.Base.viewModel</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/BasiGX.view.button.Base' rel='BasiGX.view.button.Base' class='defined-in docClass'>BasiGX.view.button.Base</a><br/><a href='source/Base.html#BasiGX-view-button-Base-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/BasiGX.view.button.Base-method-constructor' class='name expandable'>BasiGX.view.button.ToggleLegend</a>( <span class='pre'></span> ) : <a href=\"#!/api/BasiGX.view.button.Base\" rel=\"BasiGX.view.button.Base\" class=\"docClass\">BasiGX.view.button.Base</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/BasiGX.view.button.Base\" rel=\"BasiGX.view.button.Base\" class=\"docClass\">BasiGX.view.button.Base</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getHandler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.ToggleLegend'>BasiGX.view.button.ToggleLegend</span><br/><a href='source/ToggleLegend.html#BasiGX-view-button-ToggleLegend-cfg-handler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.ToggleLegend-method-getHandler' class='name expandable'>getHandler</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of handler. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/BasiGX.view.button.ToggleLegend-cfg-handler\" rel=\"BasiGX.view.button.ToggleLegend-cfg-handler\" class=\"docClass\">handler</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLegendTreeXType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.ToggleLegend'>BasiGX.view.button.ToggleLegend</span><br/><a href='source/ToggleLegend.html#BasiGX-view-button-ToggleLegend-cfg-legendTreeXType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.ToggleLegend-method-getLegendTreeXType' class='name expandable'>getLegendTreeXType</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of legendTreeXType. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/BasiGX.view.button.ToggleLegend-cfg-legendTreeXType\" rel=\"BasiGX.view.button.ToggleLegend-cfg-legendTreeXType\" class=\"docClass\">legendTreeXType</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setHandler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.ToggleLegend'>BasiGX.view.button.ToggleLegend</span><br/><a href='source/ToggleLegend.html#BasiGX-view-button-ToggleLegend-cfg-handler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.ToggleLegend-method-setHandler' class='name expandable'>setHandler</a>( <span class='pre'>handler</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of handler. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/BasiGX.view.button.ToggleLegend-cfg-handler\" rel=\"BasiGX.view.button.ToggleLegend-cfg-handler\" class=\"docClass\">handler</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>handler</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setLegendTreeXType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.ToggleLegend'>BasiGX.view.button.ToggleLegend</span><br/><a href='source/ToggleLegend.html#BasiGX-view-button-ToggleLegend-cfg-legendTreeXType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.ToggleLegend-method-setLegendTreeXType' class='name expandable'>setLegendTreeXType</a>( <span class='pre'>legendTreeXType</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of legendTreeXType. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/BasiGX.view.button.ToggleLegend-cfg-legendTreeXType\" rel=\"BasiGX.view.button.ToggleLegend-cfg-legendTreeXType\" class=\"docClass\">legendTreeXType</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>legendTreeXType</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});