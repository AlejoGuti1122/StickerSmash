// components/EmojiList.tsx
import { useState } from "react"
import {
  FlatList,
  Image,
  ImageSourcePropType,
  Platform,
  Pressable,
  StyleSheet,
} from "react-native"

// Importa las imágenes correctamente usando @/ (alias de Expo)
const emojiList = [
  require("@/assets/images/emoji1.png"),
  require("@/assets/images/emoji2.png"),
  require("@/assets/images/emoji3.png"),
  require("@/assets/images/emoji4.png"),
  require("@/assets/images/emoji5.png"),
  require("@/assets/images/emoji6.png"),
]

type Props = {
  onSelect: (emoji: ImageSourcePropType) => void
  onCloseModal: () => void
}

export default function EmojiList({ onSelect, onCloseModal }: Props) {
  const [selectedEmoji, setSelectedEmoji] =
    useState<ImageSourcePropType | null>(null)

  const onPress = (emoji: ImageSourcePropType) => {
    setSelectedEmoji(emoji)
    onSelect(emoji)
    onCloseModal()
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      data={emojiList}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          style={styles.emojiContainer}
          onPress={() => onPress(item)}
        >
          <Image
            source={item}
            style={styles.emoji}
          />
        </Pressable>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  )
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  emojiContainer: {
    padding: 10,
  },
  emoji: {
    width: 60,
    height: 60,
  },
})
