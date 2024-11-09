import React from 'react'
import { StyleSheet, View } from 'react-native'

import { MusicGameComponent } from '@/components/initMusicGameComponent/MusicGameComponent'

export default function Page() {
  return (
    <View style={styles.container}>
      <MusicGameComponent createMode={false} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
