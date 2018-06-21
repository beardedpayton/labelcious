async function labelcious(context) {
  const config = await context.config('config.yml')
    
  // grab payload label
  const label = context.payload.label

  // do nothing if no labels exists
  if (!label) {
    return
  }

  // check for label and comment on issue if label exists
  if (label) {

    if (config.customLabels === true) {
      const customLabels = config.labels
      const dynamicVars = {}
  
     // create dynamic variable names and set value
     for (let i = 0; i < customLabels.length; i++) {
        dynamicVars['custom' + i] = customLabels[i]
     }
  
     // set custom comment for each dynamic variable
     for (customLabel in dynamicVars) {
        if (label.name === dynamicVars[customLabel]) {
          const params = context.issue({body: config[customLabel]})
          return context.github.issues.createComment(params)
        }
     }
    }

    if (label.name === 'bug' && config.bugComment != false) {
      const params = context.issue({body: config.bugComment})
      return context.github.issues.createComment(params)
    }

    if (label.name === 'duplicate' && config.duplicateComment != false) {
      const params = context.issue({body: config.duplicateComment})
      return context.github.issues.createComment(params)
    }

    if (label.name === 'enhancement' && config.enhancementComment != false) {
      const params = context.issue({body: config.enhancementComment})
      return context.github.issues.createComment(params)
    }

    if (label.name === 'good first issue' && config.goodFirstIssueComment != false) {
      const params = context.issue({body: config.goodFirstIssueComment})
      return context.github.issues.createComment(params)
    }

    if (label.name === 'help wanted' && config.helpWantedComment != false) {
      const params = context.issue({body: config.helpWantedComment})
      return context.github.issues.createComment(params)
    }

    if (label.name === 'invalid' && config.invalidComment != false) {
      const params = context.issue({body: config.invalidComment})
      return context.github.issues.createComment(params)
    }

    if (label.name === 'question' && config.questionComment != false) {
      const params = context.issue({body: config.questionComment})
      return context.github.issues.createComment(params)
    }

    if (label.name === 'wont fix' && config.wontFixComment != false) {
      const params = context.issue({body: config.wontFixComment})
      return context.github.issues.createComment(params)
    }

  }
}

module.exports = robot => {
  robot.on('issues.opened', labelcious),
  robot.on('issues.labeled', labelcious)
}
