Undo
====

An editor module for editors that support undo/redo

    CommandStack = require "command-stack"

    module.exports = (I={}, self=Core(I)) ->
      commandStack = CommandStack()

      self.extend
        history: (newHistory=[]) ->
          if arguments.length > 0
            commandStack = CommandStack newHistory
          else
            commandStack.stack()

        execute: (command) ->
          commandStack.execute command

          return self

        undo: ->
          commandStack.undo()

          return self

        redo: ->
          commandStack.redo()

          return self

      return self
