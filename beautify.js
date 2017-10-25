module.exports = function() {
  var config = {
    _indentSize: {
       title: 'Indent Size',
       type: 'integer',
       default: 2,
       description: "Set indent size"
    }
  };

  return {
    debug: true,
    html: {
      file_types: ['.html', '.hbs'],
      indent_size: config._indentSize.default,
      indent_handlebars: true,
      brace_style: "collapse",
      end_with_newline: false,
      extra_liners: ["head", "body", "/html"],
      indent_char: " ",
      indent_inner_html: false,
      indent_scripts: "keep",
      indent_with_tabs: false,
      max_preserve_newlines: 10,
      preserve_newlines: true,
      unformatted: ["img", "bdo", "em", "strong", "dfn", "code", "samp", "kbd", "var", "cite", "abbr", "acronym", "q", "sub", "sup", "tt", "i", "b", "g", "small", "u", "s", "strike", "font", "ins", "del", "pre", "address", "dt", "h1", "h2", "h3", "h4", "h5", "h6", "h5", "h6"],
      wrap_attributes: "auto",
      wrap_attributes_indent_size: config._indentSize.default,
      wrap_line_length: 80
    }
  };
}
