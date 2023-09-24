import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_initial_app/providers/user_provider.dart';
import 'package:flutter_initial_app/responsive/mobile_screen_layout.dart';
import 'package:flutter_initial_app/responsive/web_screen_layout.dart';
import 'package:flutter_initial_app/screens/login_screen.dart';
import 'package:flutter_initial_app/screens/signup_screen.dart';
import 'package:flutter_initial_app/utils/colors.dart';
import 'package:provider/provider.dart';
import 'responsive/responsive_layout_screen.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  if (kIsWeb) {
    await Firebase.initializeApp(
      options: const FirebaseOptions(
          apiKey: "AIzaSyDCpPtO_hSGpYgHFJNTvuzeBsDPUY54liM",
          appId: "1:862730387540:web:4c914ea5348008b8792dc1",
          messagingSenderId: "862730387540",
          projectId: "instagram-clone-742cf",
          storageBucket: "instagram-clone-742cf.appspot.com"),
    );
  } else {
    await Firebase.initializeApp();
  }

  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [ChangeNotifierProvider(create: (_) => UserProvider())],
      child: MaterialApp(
        debugShowCheckedModeBanner: false,
        title: 'Instagram clone',
        theme: ThemeData.dark()
            .copyWith(scaffoldBackgroundColor: mobileBackgroundColor),
        home: StreamBuilder(
          stream: FirebaseAuth.instance.authStateChanges(),
          builder: ((context, snapshot) {
            if (snapshot.connectionState == ConnectionState.active) {
              if (snapshot.hasData) {
                return const ResponsiveLayout(
                    webScreenLayout: WebScreenLayout(),
                    mobielScreenLayout: MobileScreenLayout());
              } else if (snapshot.hasError) {
                return Center(
                  child: Text('${snapshot.error}'),
                );
              }
            }
            if (snapshot.connectionState == ConnectionState.waiting) {
              return const Center(
                child: CircularProgressIndicator(
                  color: primaryColor,
                ),
              );
            }
            return const LoginScreen();
          }),
        ),
      ),
    );
  }
}
