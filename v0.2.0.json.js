window["distri/undo:v0.2.0"]({
  "source": {
    "LICENSE": {
      "path": "LICENSE",
      "mode": "100644",
      "content": "The MIT License (MIT)\n\nCopyright (c) 2013 distri\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
      "type": "blob"
    },
    "README.md": {
      "path": "README.md",
      "mode": "100644",
      "content": "undo\n====\n\nUndo module for editors.\n",
      "type": "blob"
    },
    "main.coffee.md": {
      "path": "main.coffee.md",
      "mode": "100644",
      "content": "Undo\n====\n\nAn editor module for editors that support undo/redo\n\n    CommandStack = require \"command-stack\"\n\n    module.exports = (I={}, self=Core(I)) ->\n      commandStack = CommandStack()\n\n      self.extend\n        history: (newHistory=[]) ->\n          if arguments.length > 0\n            commandStack = CommandStack newHistory\n          else\n            commandStack.stack()\n\n        execute: (command) ->\n          commandStack.execute command\n\n          return self\n\n        undo: ->\n          commandStack.undo()\n\n          return self\n\n        redo: ->\n          commandStack.redo()\n\n          return self\n\n      return self\n",
      "type": "blob"
    },
    "pixie.cson": {
      "path": "pixie.cson",
      "mode": "100644",
      "content": "version: \"0.2.0\"\nremoteDependencies: [\n  \"http://strd6.github.io/tempest/javascripts/envweb-v0.4.7.js\"\n]\ndependencies:\n  \"command-stack\": \"distri/command-stack:v0.11.0\"\n",
      "type": "blob"
    },
    "test/undo.coffee": {
      "path": "test/undo.coffee",
      "mode": "100644",
      "content": "Undo = require \"../main\"\n\ndescribe \"undo\", ->\n  it \"should undo\", ->\n    undo = Undo()\n    \n    undo.execute\n      execute: ->\n        console.log \"execute\"\n      undo: ->\n        console.log \"undo\"\n    \n    undo.undo()\n",
      "type": "blob"
    }
  },
  "distribution": {
    "main": {
      "path": "main",
      "content": "(function() {\n  var CommandStack;\n\n  CommandStack = require(\"command-stack\");\n\n  module.exports = function(I, self) {\n    var commandStack;\n    if (I == null) {\n      I = {};\n    }\n    if (self == null) {\n      self = Core(I);\n    }\n    commandStack = CommandStack();\n    self.extend({\n      history: function(newHistory) {\n        if (newHistory == null) {\n          newHistory = [];\n        }\n        if (arguments.length > 0) {\n          return commandStack = CommandStack(newHistory);\n        } else {\n          return commandStack.stack();\n        }\n      },\n      execute: function(command) {\n        commandStack.execute(command);\n        return self;\n      },\n      undo: function() {\n        commandStack.undo();\n        return self;\n      },\n      redo: function() {\n        commandStack.redo();\n        return self;\n      }\n    });\n    return self;\n  };\n\n}).call(this);\n\n//# sourceURL=main.coffee",
      "type": "blob"
    },
    "pixie": {
      "path": "pixie",
      "content": "module.exports = {\"version\":\"0.2.0\",\"remoteDependencies\":[\"http://strd6.github.io/tempest/javascripts/envweb-v0.4.7.js\"],\"dependencies\":{\"command-stack\":\"distri/command-stack:v0.11.0\"}};",
      "type": "blob"
    },
    "test/undo": {
      "path": "test/undo",
      "content": "(function() {\n  var Undo;\n\n  Undo = require(\"../main\");\n\n  describe(\"undo\", function() {\n    return it(\"should undo\", function() {\n      var undo;\n      undo = Undo();\n      undo.execute({\n        execute: function() {\n          return console.log(\"execute\");\n        },\n        undo: function() {\n          return console.log(\"undo\");\n        }\n      });\n      return undo.undo();\n    });\n  });\n\n}).call(this);\n\n//# sourceURL=test/undo.coffee",
      "type": "blob"
    }
  },
  "progenitor": {
    "url": "http://strd6.github.io/editor/"
  },
  "version": "0.2.0",
  "entryPoint": "main",
  "remoteDependencies": [
    "http://strd6.github.io/tempest/javascripts/envweb-v0.4.7.js"
  ],
  "repository": {
    "id": 14673255,
    "name": "undo",
    "full_name": "distri/undo",
    "owner": {
      "login": "distri",
      "id": 6005125,
      "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
      "gravatar_id": null,
      "url": "https://api.github.com/users/distri",
      "html_url": "https://github.com/distri",
      "followers_url": "https://api.github.com/users/distri/followers",
      "following_url": "https://api.github.com/users/distri/following{/other_user}",
      "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
      "organizations_url": "https://api.github.com/users/distri/orgs",
      "repos_url": "https://api.github.com/users/distri/repos",
      "events_url": "https://api.github.com/users/distri/events{/privacy}",
      "received_events_url": "https://api.github.com/users/distri/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/distri/undo",
    "description": "Undo module for editors.",
    "fork": false,
    "url": "https://api.github.com/repos/distri/undo",
    "forks_url": "https://api.github.com/repos/distri/undo/forks",
    "keys_url": "https://api.github.com/repos/distri/undo/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/distri/undo/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/distri/undo/teams",
    "hooks_url": "https://api.github.com/repos/distri/undo/hooks",
    "issue_events_url": "https://api.github.com/repos/distri/undo/issues/events{/number}",
    "events_url": "https://api.github.com/repos/distri/undo/events",
    "assignees_url": "https://api.github.com/repos/distri/undo/assignees{/user}",
    "branches_url": "https://api.github.com/repos/distri/undo/branches{/branch}",
    "tags_url": "https://api.github.com/repos/distri/undo/tags",
    "blobs_url": "https://api.github.com/repos/distri/undo/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/distri/undo/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/distri/undo/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/distri/undo/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/distri/undo/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/distri/undo/languages",
    "stargazers_url": "https://api.github.com/repos/distri/undo/stargazers",
    "contributors_url": "https://api.github.com/repos/distri/undo/contributors",
    "subscribers_url": "https://api.github.com/repos/distri/undo/subscribers",
    "subscription_url": "https://api.github.com/repos/distri/undo/subscription",
    "commits_url": "https://api.github.com/repos/distri/undo/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/distri/undo/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/distri/undo/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/distri/undo/issues/comments/{number}",
    "contents_url": "https://api.github.com/repos/distri/undo/contents/{+path}",
    "compare_url": "https://api.github.com/repos/distri/undo/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/distri/undo/merges",
    "archive_url": "https://api.github.com/repos/distri/undo/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/distri/undo/downloads",
    "issues_url": "https://api.github.com/repos/distri/undo/issues{/number}",
    "pulls_url": "https://api.github.com/repos/distri/undo/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/distri/undo/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/distri/undo/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/distri/undo/labels{/name}",
    "releases_url": "https://api.github.com/repos/distri/undo/releases{/id}",
    "created_at": "2013-11-25T01:31:38Z",
    "updated_at": "2013-11-25T01:40:59Z",
    "pushed_at": "2013-11-25T01:40:58Z",
    "git_url": "git://github.com/distri/undo.git",
    "ssh_url": "git@github.com:distri/undo.git",
    "clone_url": "https://github.com/distri/undo.git",
    "svn_url": "https://github.com/distri/undo",
    "homepage": null,
    "size": 336,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "CoffeeScript",
    "has_issues": true,
    "has_downloads": true,
    "has_wiki": true,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master",
    "master_branch": "master",
    "permissions": {
      "admin": true,
      "push": true,
      "pull": true
    },
    "organization": {
      "login": "distri",
      "id": 6005125,
      "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
      "gravatar_id": null,
      "url": "https://api.github.com/users/distri",
      "html_url": "https://github.com/distri",
      "followers_url": "https://api.github.com/users/distri/followers",
      "following_url": "https://api.github.com/users/distri/following{/other_user}",
      "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
      "organizations_url": "https://api.github.com/users/distri/orgs",
      "repos_url": "https://api.github.com/users/distri/repos",
      "events_url": "https://api.github.com/users/distri/events{/privacy}",
      "received_events_url": "https://api.github.com/users/distri/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "network_count": 0,
    "subscribers_count": 2,
    "branch": "v0.2.0",
    "defaultBranch": "master"
  },
  "dependencies": {
    "command-stack": {
      "source": {
        "main.coffee.md": {
          "path": "main.coffee.md",
          "mode": "100644",
          "content": "Command Stack\n-------------\n\nA simple stack based implementation of executable and undoable commands.\n\n    CommandStack = (stack=[]) ->\n      index = stack.length\n\n      execute: (command) ->\n        stack[index] = command\n        command.execute()\n\n        index += 1\n\n        # Be sure to blast obsolete redos\n        stack.length = index\n\n        return this\n\n      undo: ->\n        if @canUndo()\n          index -= 1\n\n          command = stack[index]\n          command.undo()\n\n          return command\n\n      redo: ->\n        if @canRedo()\n          command = stack[index]\n          command.execute()\n\n          index += 1\n\n          return command\n\n      current: ->\n        stack[index-1]\n\n      canUndo: ->\n        index > 0\n\n      canRedo: ->\n        stack[index]?\n\n      stack: ->\n        stack.slice(0, index)\n\n    module.exports = CommandStack\n\nTODO\n----\n\nIntegrate Observables\n",
          "type": "blob"
        },
        "package.json": {
          "path": "package.json",
          "mode": "100644",
          "content": "{\n  \"name\": \"commando\",\n  \"version\": \"0.9.0\",\n  \"description\": \"Simple Command Pattern\",\n  \"devDependencies\": {\n    \"coffee-script\": \"~1.6.3\",\n    \"mocha\": \"~1.12.0\",\n    \"uglify-js\": \"~2.3.6\"\n  },\n  \"repository\": {\n    \"type\": \"git\",\n    \"url\": \"https://github.com/STRd6/commando.git\"\n  },\n  \"files\": [\n    \"dist\"\n  ],\n  \"main\": \"dist/commando.js\"\n}\n",
          "type": "blob"
        },
        "pixie.cson": {
          "path": "pixie.cson",
          "mode": "100644",
          "content": "version: \"0.11.0\"\n",
          "type": "blob"
        },
        "test/command_stack.coffee": {
          "path": "test/command_stack.coffee",
          "mode": "100644",
          "content": "CommandStack = require \"../main\"\n\nok = assert\nequals = assert.equal\n\ndescribe \"CommandStack\", ->\n  it \"undo on an empty stack returns undefined\", ->\n    commandStack = CommandStack()\n  \n    equals commandStack.undo(), undefined\n  \n  it \"redo on an empty stack returns undefined\", ->\n    commandStack = CommandStack()\n  \n    equals commandStack.redo(), undefined\n  \n  it \"executes commands\", ->\n    command =\n      execute: ->\n        ok true, \"command executed\"\n  \n    commandStack = CommandStack()\n  \n    commandStack.execute command\n  \n  it \"can undo\", ->\n    command =\n      execute: ->\n      undo: ->\n        ok true, \"command executed\"\n  \n    commandStack = CommandStack()\n    commandStack.execute command\n  \n    commandStack.undo()\n  \n  it \"can redo\", ->\n    command =\n      execute: ->\n        ok true, \"command executed\"\n      undo: ->\n  \n    commandStack = CommandStack()\n    commandStack.execute command\n  \n    commandStack.undo()\n    commandStack.redo()\n  \n  it \"executes redone command once on redo\", ->\n    command =\n      execute: ->\n        ok true, \"command executed\"\n      undo: ->\n  \n    commandStack = CommandStack()\n    commandStack.execute command\n  \n    commandStack.undo()\n    commandStack.redo()\n  \n    equals commandStack.redo(), undefined\n    equals commandStack.redo(), undefined\n  \n  it \"command is returned when undone\", ->\n    command =\n      execute: ->\n      undo: ->\n  \n    commandStack = CommandStack()\n    commandStack.execute command\n  \n    equals commandStack.undo(), command, \"Undone command is returned\"\n  \n  it \"command is returned when redone\", ->\n    command =\n      execute: ->\n      undo: ->\n  \n    commandStack = CommandStack()\n    commandStack.execute command\n    commandStack.undo()\n  \n    equals commandStack.redo(), command, \"Redone command is returned\"\n  \n  it \"cannot redo an obsolete future\", ->\n    Command = ->\n      execute: ->\n      undo: ->\n  \n    commandStack = CommandStack()\n    commandStack.execute Command()\n    commandStack.execute Command()\n  \n    commandStack.undo()\n    commandStack.undo()\n  \n    equals commandStack.canRedo(), true\n  \n    commandStack.execute Command()\n  \n    equals commandStack.canRedo(), false\n",
          "type": "blob"
        }
      },
      "distribution": {
        "main": {
          "path": "main",
          "content": "(function() {\n  var CommandStack;\n\n  CommandStack = function(stack) {\n    var index;\n    if (stack == null) {\n      stack = [];\n    }\n    index = stack.length;\n    return {\n      execute: function(command) {\n        stack[index] = command;\n        command.execute();\n        index += 1;\n        stack.length = index;\n        return this;\n      },\n      undo: function() {\n        var command;\n        if (this.canUndo()) {\n          index -= 1;\n          command = stack[index];\n          command.undo();\n          return command;\n        }\n      },\n      redo: function() {\n        var command;\n        if (this.canRedo()) {\n          command = stack[index];\n          command.execute();\n          index += 1;\n          return command;\n        }\n      },\n      current: function() {\n        return stack[index - 1];\n      },\n      canUndo: function() {\n        return index > 0;\n      },\n      canRedo: function() {\n        return stack[index] != null;\n      },\n      stack: function() {\n        return stack.slice(0, index);\n      }\n    };\n  };\n\n  module.exports = CommandStack;\n\n}).call(this);\n\n//# sourceURL=main.coffee",
          "type": "blob"
        },
        "package": {
          "path": "package",
          "content": "module.exports = {\"name\":\"commando\",\"version\":\"0.9.0\",\"description\":\"Simple Command Pattern\",\"devDependencies\":{\"coffee-script\":\"~1.6.3\",\"mocha\":\"~1.12.0\",\"uglify-js\":\"~2.3.6\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/STRd6/commando.git\"},\"files\":[\"dist\"],\"main\":\"dist/commando.js\"};",
          "type": "blob"
        },
        "pixie": {
          "path": "pixie",
          "content": "module.exports = {\"version\":\"0.11.0\"};",
          "type": "blob"
        },
        "test/command_stack": {
          "path": "test/command_stack",
          "content": "(function() {\n  var CommandStack, equals, ok;\n\n  CommandStack = require(\"../main\");\n\n  ok = assert;\n\n  equals = assert.equal;\n\n  describe(\"CommandStack\", function() {\n    it(\"undo on an empty stack returns undefined\", function() {\n      var commandStack;\n      commandStack = CommandStack();\n      return equals(commandStack.undo(), void 0);\n    });\n    it(\"redo on an empty stack returns undefined\", function() {\n      var commandStack;\n      commandStack = CommandStack();\n      return equals(commandStack.redo(), void 0);\n    });\n    it(\"executes commands\", function() {\n      var command, commandStack;\n      command = {\n        execute: function() {\n          return ok(true, \"command executed\");\n        }\n      };\n      commandStack = CommandStack();\n      return commandStack.execute(command);\n    });\n    it(\"can undo\", function() {\n      var command, commandStack;\n      command = {\n        execute: function() {},\n        undo: function() {\n          return ok(true, \"command executed\");\n        }\n      };\n      commandStack = CommandStack();\n      commandStack.execute(command);\n      return commandStack.undo();\n    });\n    it(\"can redo\", function() {\n      var command, commandStack;\n      command = {\n        execute: function() {\n          return ok(true, \"command executed\");\n        },\n        undo: function() {}\n      };\n      commandStack = CommandStack();\n      commandStack.execute(command);\n      commandStack.undo();\n      return commandStack.redo();\n    });\n    it(\"executes redone command once on redo\", function() {\n      var command, commandStack;\n      command = {\n        execute: function() {\n          return ok(true, \"command executed\");\n        },\n        undo: function() {}\n      };\n      commandStack = CommandStack();\n      commandStack.execute(command);\n      commandStack.undo();\n      commandStack.redo();\n      equals(commandStack.redo(), void 0);\n      return equals(commandStack.redo(), void 0);\n    });\n    it(\"command is returned when undone\", function() {\n      var command, commandStack;\n      command = {\n        execute: function() {},\n        undo: function() {}\n      };\n      commandStack = CommandStack();\n      commandStack.execute(command);\n      return equals(commandStack.undo(), command, \"Undone command is returned\");\n    });\n    it(\"command is returned when redone\", function() {\n      var command, commandStack;\n      command = {\n        execute: function() {},\n        undo: function() {}\n      };\n      commandStack = CommandStack();\n      commandStack.execute(command);\n      commandStack.undo();\n      return equals(commandStack.redo(), command, \"Redone command is returned\");\n    });\n    return it(\"cannot redo an obsolete future\", function() {\n      var Command, commandStack;\n      Command = function() {\n        return {\n          execute: function() {},\n          undo: function() {}\n        };\n      };\n      commandStack = CommandStack();\n      commandStack.execute(Command());\n      commandStack.execute(Command());\n      commandStack.undo();\n      commandStack.undo();\n      equals(commandStack.canRedo(), true);\n      commandStack.execute(Command());\n      return equals(commandStack.canRedo(), false);\n    });\n  });\n\n}).call(this);\n\n//# sourceURL=test/command_stack.coffee",
          "type": "blob"
        }
      },
      "progenitor": {
        "url": "http://strd6.github.io/editor/"
      },
      "version": "0.11.0",
      "entryPoint": "main",
      "repository": {
        "id": 11981428,
        "name": "command-stack",
        "full_name": "distri/command-stack",
        "owner": {
          "login": "distri",
          "id": 6005125,
          "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
          "gravatar_id": null,
          "url": "https://api.github.com/users/distri",
          "html_url": "https://github.com/distri",
          "followers_url": "https://api.github.com/users/distri/followers",
          "following_url": "https://api.github.com/users/distri/following{/other_user}",
          "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
          "organizations_url": "https://api.github.com/users/distri/orgs",
          "repos_url": "https://api.github.com/users/distri/repos",
          "events_url": "https://api.github.com/users/distri/events{/privacy}",
          "received_events_url": "https://api.github.com/users/distri/received_events",
          "type": "Organization",
          "site_admin": false
        },
        "private": false,
        "html_url": "https://github.com/distri/command-stack",
        "description": "A stack for holding command objects.",
        "fork": false,
        "url": "https://api.github.com/repos/distri/command-stack",
        "forks_url": "https://api.github.com/repos/distri/command-stack/forks",
        "keys_url": "https://api.github.com/repos/distri/command-stack/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/distri/command-stack/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/distri/command-stack/teams",
        "hooks_url": "https://api.github.com/repos/distri/command-stack/hooks",
        "issue_events_url": "https://api.github.com/repos/distri/command-stack/issues/events{/number}",
        "events_url": "https://api.github.com/repos/distri/command-stack/events",
        "assignees_url": "https://api.github.com/repos/distri/command-stack/assignees{/user}",
        "branches_url": "https://api.github.com/repos/distri/command-stack/branches{/branch}",
        "tags_url": "https://api.github.com/repos/distri/command-stack/tags",
        "blobs_url": "https://api.github.com/repos/distri/command-stack/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/distri/command-stack/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/distri/command-stack/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/distri/command-stack/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/distri/command-stack/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/distri/command-stack/languages",
        "stargazers_url": "https://api.github.com/repos/distri/command-stack/stargazers",
        "contributors_url": "https://api.github.com/repos/distri/command-stack/contributors",
        "subscribers_url": "https://api.github.com/repos/distri/command-stack/subscribers",
        "subscription_url": "https://api.github.com/repos/distri/command-stack/subscription",
        "commits_url": "https://api.github.com/repos/distri/command-stack/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/distri/command-stack/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/distri/command-stack/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/distri/command-stack/issues/comments/{number}",
        "contents_url": "https://api.github.com/repos/distri/command-stack/contents/{+path}",
        "compare_url": "https://api.github.com/repos/distri/command-stack/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/distri/command-stack/merges",
        "archive_url": "https://api.github.com/repos/distri/command-stack/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/distri/command-stack/downloads",
        "issues_url": "https://api.github.com/repos/distri/command-stack/issues{/number}",
        "pulls_url": "https://api.github.com/repos/distri/command-stack/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/distri/command-stack/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/distri/command-stack/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/distri/command-stack/labels{/name}",
        "releases_url": "https://api.github.com/repos/distri/command-stack/releases{/id}",
        "created_at": "2013-08-08T16:51:40Z",
        "updated_at": "2013-11-25T00:40:55Z",
        "pushed_at": "2013-11-25T00:40:53Z",
        "git_url": "git://github.com/distri/command-stack.git",
        "ssh_url": "git@github.com:distri/command-stack.git",
        "clone_url": "https://github.com/distri/command-stack.git",
        "svn_url": "https://github.com/distri/command-stack",
        "homepage": "",
        "size": 664,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": "CoffeeScript",
        "has_issues": true,
        "has_downloads": true,
        "has_wiki": true,
        "forks_count": 0,
        "mirror_url": null,
        "open_issues_count": 0,
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master",
        "master_branch": "master",
        "permissions": {
          "admin": true,
          "push": true,
          "pull": true
        },
        "organization": {
          "login": "distri",
          "id": 6005125,
          "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
          "gravatar_id": null,
          "url": "https://api.github.com/users/distri",
          "html_url": "https://github.com/distri",
          "followers_url": "https://api.github.com/users/distri/followers",
          "following_url": "https://api.github.com/users/distri/following{/other_user}",
          "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
          "organizations_url": "https://api.github.com/users/distri/orgs",
          "repos_url": "https://api.github.com/users/distri/repos",
          "events_url": "https://api.github.com/users/distri/events{/privacy}",
          "received_events_url": "https://api.github.com/users/distri/received_events",
          "type": "Organization",
          "site_admin": false
        },
        "network_count": 0,
        "subscribers_count": 1,
        "branch": "v0.11.0",
        "defaultBranch": "master"
      },
      "dependencies": {}
    }
  }
});