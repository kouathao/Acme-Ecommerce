var elixir = require("laravel-elixir");
elixir.config.sourcemaps = false;

var gulp = require("gulp");

elixir(function(mix) {
  // compile sasss to css 1) location 2 place new file
  mix.sass("resources/assets/sass/app.scss", "resources/assets/css");

  // comine css file to one
  mix.style([
    
  ]);
});
