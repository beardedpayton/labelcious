module.exports = robot => {
  robot.on('issues.opened', async context => {
    config = await context.config('config.yml')
    const params = context.issue({body: config.goodFirstIssueComment})
    return context.github.issues.createComment(params)
  })
}
 