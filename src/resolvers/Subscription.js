const Subscription = {
  newOutfit: {
    subscribe(parent, args, context, info) {
      return context.pubsub.asyncIterator('NEW_OUTFIT')
    },
    resolve: (payload) => {
      return payload
    },
  },

  newVote: {
    subscribe(parent, args, context, info) {
      return context.pubsub.asyncIterator('NEW_VOTE')
    },

    resolve: (payload) => {
      return payload
    },
  },
}

export { Subscription as default }
