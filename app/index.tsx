import React from 'react'
import { StyleSheet, View } from 'react-native'

import { MusicGame } from '@/components/initMusicGame/MusicGame'

export default function Page() {
  return (
    <View style={styles.container}>
      <MusicGame createMode={false} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
