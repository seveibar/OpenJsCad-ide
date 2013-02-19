var gProcessor,editor;
function init(){

	gProcessor = new OpenJsCad.Processor(document.getElementById("viewer"));

	editor = CodeMirror.fromTextArea(document.getElementById("code"), {
	    lineNumbers: true,
	    matchBrackets: true,
	    extraKeys: {"Enter": "newlineAndIndentContinueComment",
					"Ctrl-S":function(){
						render();
					}}
	});

	editor.setSize(window.innerWidth - 800,window.innerHeight);

	//Set Editor Theme
	var theme = window.location.href.split("#").pop();
	var themes = ["ambiance","eclipse","monokai","solarized","ambiance-mobile","elegant","neat","twilight","blackboard","erlang-dark","night","vibrant-ink","cobalt","lesser-dark","rubyblue","xq-dark"];
	if (themes.indexOf(theme) != -1){
		editor.setOption("theme",theme);
	}

};
function render(){
	gProcessor.setJsCad(editor.getValue(),"test");
}