import { ScrollView, StyleSheet, Text, View } from "react-native"

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appTitle}>StickerSmash</Text>
        <Text style={styles.version}>v1.0.0</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.description}>
          Una app divertida y creativa para personalizar tus fotos con stickers
          únicos. Carga tus imágenes favoritas, añade stickers geniales y guarda
          tus creaciones.
        </Text>

        <View style={styles.features}>
          <Text style={styles.featuresTitle}>✨ Características</Text>
          <Text style={styles.feature}>📷 Carga fotos desde tu galería</Text>
          <Text style={styles.feature}>🎨 Añade stickers personalizados</Text>
          <Text style={styles.feature}>💾 Guarda tus creaciones</Text>
          <Text style={styles.feature}>📱 Compatible con iOS y Web</Text>
        </View>

        <View style={styles.developer}>
          <Text style={styles.developerTitle}>👨‍💻 Desarrollador</Text>
          <Text style={styles.developerName}>Frontend Developer</Text>
          <Text style={styles.developerDesc}>
            Me divierte crear experiencias digitales increíbles con React
            Native, transformando ideas en aplicaciones que la gente ama usar.
          </Text>
        </View>

        <View style={styles.tech}>
          <Text style={styles.techTitle}>🛠️ Tecnologías</Text>
          <Text style={styles.techStack}>React Native • Expo • JavaScript</Text>
        </View>

        <Text style={styles.footer}>Hecho con 💙 para la comunidad</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#25292e",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 30,
  },
  appTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  version: {
    fontSize: 16,
    color: "#8b949e",
  },
  content: {
    flex: 1,
  },
  description: {
    fontSize: 18,
    color: "#c9d1d9",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 30,
  },
  features: {
    marginBottom: 30,
  },
  featuresTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#58a6ff",
    marginBottom: 15,
  },
  feature: {
    fontSize: 16,
    color: "#c9d1d9",
    marginBottom: 8,
    paddingLeft: 10,
  },
  developer: {
    marginBottom: 30,
    padding: 20,
    backgroundColor: "#30363d",
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#58a6ff",
  },
  developerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#58a6ff",
    marginBottom: 10,
  },
  developerName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 10,
  },
  developerDesc: {
    fontSize: 16,
    color: "#c9d1d9",
    lineHeight: 22,
  },
  tech: {
    marginBottom: 30,
  },
  techTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#58a6ff",
    marginBottom: 10,
  },
  techStack: {
    fontSize: 16,
    color: "#c9d1d9",
    fontStyle: "italic",
  },
  footer: {
    fontSize: 16,
    color: "#8b949e",
    textAlign: "center",
    marginTop: 20,
    fontStyle: "italic",
  },
})
