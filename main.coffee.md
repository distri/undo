Undo
====

An editor module for editors that support undo/redo

    CommandStack = require "command-stack"

    {extend} = require "util"

    module.exports = (I={}, self={}) ->
      commandStack = CommandStack()

      extend self,
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

        canUndo: ->
          commandStack.canUndo()

        canRedo: ->
          commandStack.canRedo()

      return self
