import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { MusicGameComponent } from '@/components/initMusicGameComponent/MusicGameComponent'

export default function Page() {
  const [createMode, setCreateMode] = useState(false)

  return (
    <View style={styles.container}>
      <MusicGameComponent
        createMode={createMode}
        onChangeCreateMode={setCreateMode}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
