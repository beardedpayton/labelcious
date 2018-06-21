# labelcious

Labelcious is a GitHub app built to make OSS maintainers lives easier! It helps maintainers automate comments on issues based on what label is selected. The maintainer has full control over what native/custom GitHub labels the bot should reply on and what the bot should say!

<img width="791" alt="screen shot 2018-06-21 at 9 47 44 am" src="https://user-images.githubusercontent.com/20526900/41725174-342582e6-753d-11e8-9dc3-2e49c0910d93.png">

## Usage

1. Install the [labelcious bot](https://github.com/apps/labelcious/) on the repositories you'd like it to help with.
2. Create a ```.github/config.yml``` in the repository labelcious is installed on.

```YAML
# Please supply comments to be used for native GitHub labels. 
# You can turn off bot comments for a label by setting it's value to 'false'
bugComment: >
  Yuck! Bugs are no fun and this was really unexpected. Please provide everything you can about this bug.

duplicateComment: >
  We are sorry you didn't see this but it already exists! Thanks for letting us know anyways!
  
enhancementComment: >
  This sounds pretty sweet. Give us a few weeks to talk it over.
  
goodFirstIssueComment: >
  If you're a first time contributor we are glad you are here! Email me if you need guidance paytonburd@gmail.com
  
helpWantedComment: >
  HELP, HELP, HELP... We need some help

invalidComment: >
  Are you really sure about this? This just doesn't seem right.

questionComment: >
  That's a really good question. Give me a little bit and I'll get back to you.
  
wontFixComment: false

# To use customLabels set value to 'true', set to 'false' to not use customLabels
customLabels: true

# Labelcious supports infinity custom labels, if customLabels is set to 'false' set labels: []
labels:
  - docs
  - feature request
  - wip
  - cannot reproduce
  
 # Each custom label has an index to relate the comment. The naming convention is 'custom0'
 # 'custom0' would relate to the first custom label you state, and 'custom1' would be the second label etc.
 # If you have four labels you want automated comments for you would do this...
 
custom0: >
  Love this! We should include this in our docs. Since @beardedpayton is over our docs he will handle it!
 
custom1: >
  This is a killer feature request. @jonsnowdude will handle this!
 
custom3: >
  We hope to have this wrapped up soon.
 
custom4: >
  Yeah we tried our best. We can't reproduce this, we need more info! Can you supply a video ?

```

## License

[ISC](LICENSE) © 2018 beardedpayton <beardedpayton@gmail.com> (https://github.com/apps/labelcious)
