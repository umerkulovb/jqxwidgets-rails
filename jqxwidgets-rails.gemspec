# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'jqxwidgets/rails/version'

Gem::Specification.new do |spec|
  spec.name          = "jqxwidgets-rails"
  spec.version       = Jqxwidgets::Rails::VERSION
  spec.authors       = ["Bob Umerkulov"]
  spec.email         = ["b.umerkulov@gmail.com"]
  spec.description   = %q{jqxWidgets for Rails 3.1 Asset Pipiline}
  spec.summary       = %q{integrates jqWidgets for Rails 3.1 Asset Pipiline}
  spec.homepage      = ""
  spec.license       = "http://www.jqwidgets.com/license"

  spec.files         = `git ls-files`.split($/)
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ["lib"]

  spec.add_dependency 'railties', '~> 3.2.13'
  spec.add_dependency 'actionpack', '~> 3.2.13'
  spec.add_development_dependency "bundler", "~> 1.3"
  spec.add_development_dependency "rake"
end
