async function labelcious(context) {
  const config = await context.config('config.yml') 
  const label = context.payload.label

  if (!label) {
    return
  }

  if (label) {
    for(nativeLabel in config.githubLabels) {
      if (label.name === nativeLabel) {
        const params = context.issue({body: config.githubLabels[nativeLabel]})
        context.github.issues.createComment(params)
      }
    }
  }
}

module.exports = robot => {
  robot.on('issues.opened', labelcious),
  robot.on('issues.labeled', labelcious)
}
