$:.push File.expand_path('lib', __dir__)

require 'workarea/google_tag_manager/version'

Gem::Specification.new do |s|
  s.name        = 'workarea-google_tag_manager'
  s.version     = Workarea::GoogleTagManager::VERSION
  s.authors     = ['Jake Beresford']
  s.email       = ['jberesford@workarea.com']
  s.homepage    = 'https://github.com/workarea-commerce/workarea-google_tag_manager'
  s.summary     = 'Google Tag Manager for the Workarea Commerce Platform'
  s.description = 'Provides Google Tag Manager integration for the Workarea Commerce Platform'

  s.files = `git ls-files`.split("\n")

  s.license = 'Business Software License'
  s.test_files = Dir['test/**/*']

  s.add_dependency 'workarea', '~> 3.x'
end
