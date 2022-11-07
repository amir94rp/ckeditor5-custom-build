/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import SourceEditing from "@ckeditor/ckeditor5-source-editing/src/sourceediting";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import {LinkImage} from "@ckeditor/ckeditor5-link";
import {ImageResize} from "@ckeditor/ckeditor5-image";
import {ImageInsert} from "@ckeditor/ckeditor5-image";
import {AutoImage} from "@ckeditor/ckeditor5-image";
import GeneralHtmlSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import Font from '@ckeditor/ckeditor5-font/src/font';
import SelectAll from '@ckeditor/ckeditor5-select-all/src/selectall';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import {ImageManager} from "@amir94rp/ckeditor5-file-manager";

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	LinkImage,
	ImageResize,
	ImageInsert,
	AutoImage,
	ImageManager,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	SourceEditing,
	Alignment,
	GeneralHtmlSupport,
	RemoveFormat,
	TodoList,
	Highlight,
	FindAndReplace,
	HorizontalLine,
	Font,
	SelectAll
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'undo', 'redo',
			'|',
			'findAndReplace', 'selectAll',
			'|',
			'heading',
			'|',
			'removeFormat','bold','italic',
			'|',
			'horizontalLine',
			'|',
			'highlight','fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor',
			'|',
			'link','blockQuote', 'insertTable', 'imageManager', 'mediaEmbed',
			'|',
			'bulletedList', 'numberedList', 'todoList',
			'|',
			'alignment','outdent','indent',
			'|',
			'sourceEditing',
		],
		shouldNotGroupWhenFull: true
	},
	image: {
		toolbar: [
			'linkImage',
			'|',
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:side',
			'|',
			'toggleImageCaption',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	htmlSupport: {
		allow: [
			{
				name: /.*/,
				attributes: true,
				classes: true,
				styles: true
			}
		]
	},
	mediaEmbed: {
		previewsInData:true,
		extraProviders: [
			{
				name: 'aparat',
				url: [
					/^aparat\.com\/v\/([\w-]+)/,
				],
				html: match => {
					const id = match[ 1 ];

					return (
						'<div style="max-width: 600px;margin: auto;border-radius: 5px;overflow: hidden;">' +
							'<div style="position: relative; padding-bottom: 100%; height: 0; padding-bottom: 56.2493%;">' +
								`<iframe src="https://www.aparat.com/video/video/embed/videohash/${ id }/vt/frame" ` +
									'style="position: absolute; width: 100%; height: 100%; top: 0; left: 0;" ' +
									'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>' +
								'</iframe>' +
							'</div>' +
						'</div>'
					);
				}
			},
		]
	},
	link: {
		defaultProtocol: 'https://',
		decorators: {
			toggleDownloadable: {
				mode: 'manual',
				label: 'Downloadable',
				attributes: {
					download: 'file'
				}
			},
			openInNewTab: {
				mode: 'manual',
				label: 'Open in a new tab',
				defaultValue: true,
				attributes: {
					target: '_blank',
					rel: 'noopener noreferrer'
				}
			}
		}
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'fa',
};
