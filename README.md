# labelcious

Labelcious is a GitHub app built to make OSS maintainers lives easier! It helps maintainers automate comments on issues based on what label is selected. The maintainer has full control over what native/custom GitHub labels the bot should reply on and what the bot should say!

<img width="791" alt="screen shot 2018-06-21 at 9 47 44 am" src="https://user-images.githubusercontent.com/20526900/41725174-342582e6-753d-11e8-9dc3-2e49c0910d93.png">

## Usage

1. Install the [labelcious bot](https://github.com/apps/labelcious/) on the repositories you'd like it to help with.
2. Create a ```.github/config.yml``` in the repository labelcious is installed on.

```YAML
# Please supply comments to be used for native GitHub labels 
# Or set it's value to 'false' if not comments are not needed.
# Add a custom label by providing new key/value. key should be EXACT name of label and value should be the comment.
githubLabels:
  bug: >
    Yuck! Bugs are no fun and this was really unexpected. Please provide everything you can about this bug.

  duplicate: >
    We are sorry you didn't see this but it already exists! Thanks for letting us know anyways!
    
  enhancement: >
    This sounds pretty sweet. Give us a few weeks to talk it over.
    
  good first issue: >
    If you're a first time contributor we are glad you are here! Email me if you need guidance paytonburd@gmail.com
    
  help wanted: >
    HELP, HELP, HELP... We need some help

  invalid: >
    Are you really sure about this? This just doesn't seem right.

  question: >
    That's a really good question. Give me a little bit and I'll get back to you.
    
  wont fix: false
  
  # custom labels start here, everything above is native GitHub labels that come with every repo
  docs: >
    Love this! We should include this in our docs. Since @beardedpayton is over our docs he will handle it!

  feature request: >
    This is a killer feature request. @jonsnowdude will handle this!

  wip: >
    We hope to have this wrapped up soon.

  cannot reproduce: >
    Yeah we tried our best. We can't reproduce this, we need more info! Can you supply a video ?
```

## License

[ISC](LICENSE) © 2018 Payton Burdette <paytonburd@gmail.com> (https://github.com/apps/labelcious)
