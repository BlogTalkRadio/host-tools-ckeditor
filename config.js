/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	
	config.uiColor = "#FFF";

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent' ] },
		{ name: 'styles' },
		{ name: 'links' },
		{ name: 'insert' }
	];

	config.removeButtons = 'Strike,Subscript,Superscript,Anchor,SpecialChar,Table,Styles,Format,Flash,Smiley,Iframe,PageBreak';

	config.format_tags = 'p;h1;h2;h3;pre';

	config.removeDialogTabs = 'image:advanced;link:advanced';

};
