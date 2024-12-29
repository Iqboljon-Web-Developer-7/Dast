import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Learn = () => {
  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>
          <p className="!text-sm text-secondary-grey-600">learn about us</p>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogDescription>
              <div id="about-us" className="pt-6 overflow-y-auto max-h-96">
                <div className="container mx-auto px-6 lg:px-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    About Us
                  </h2>
                  <div className="space-y-6">
                    <p className="text-gray-700 text-lg">
                      <strong className="font-semibold">
                        Platform Overview:
                      </strong>{" "}
                      Our photo-sharing platform is designed to inspire
                      creativity and foster connections. Users can capture,
                      edit, and share photos or videos with a global audience
                      while engaging with content from a diverse community.
                    </p>
                    <p className="text-gray-700 text-lg">
                      <strong className="font-semibold">Our Mission:</strong> To
                      provide a seamless and intuitive platform that empowers
                      individuals to share their unique perspectives, build
                      meaningful connections, and discover inspiring stories
                      from around the world.
                    </p>
                    <div>
                      <strong className="block text-gray-800 text-lg font-semibold mb-2">
                        Core Features:
                      </strong>
                      <ul className="list-disc list-inside space-y-2">
                        <li className="text-gray-700">
                          Photo and video uploads with customizable editing
                          tools
                        </li>
                        <li className="text-gray-700">
                          Engagement through likes, comments, and direct
                          messaging
                        </li>
                        <li className="text-gray-700">
                          Explore trending content with hashtags and curated
                          feeds
                        </li>
                        <li className="text-gray-700">
                          Build your profile and follow creators you love
                        </li>
                      </ul>
                    </div>
                    <p className="text-gray-700 text-lg">
                      <strong className="font-semibold">Who We Serve:</strong>{" "}
                      Our platform is for anyone who loves sharing moments,
                      discovering new content, and connecting with a global
                      creative community.
                    </p>
                  </div>
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Got it</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Learn;
